
const fs = require('fs')

const main = ()=> {
	const lines = fs.readFileSync('./nested-sectors.txt', 'utf-8').split('\n')


	const parents = [null, null]
	let prevIndent = 0
	const rows = lines.map(line=> {
		const match = line.match(/^([^\d]*)([^:]*): (.*)$/)
		if (!match) return
		const [_all, indentstr, id, _name] = match
		const indent = indentstr.length/2

		const [_all2, _p, groupId, _name2] = _name.match(/^(([A-Za-z\.\d]*\.) )?(.*)$/)
		const name = _name2.replace(/, Total$/, '')
		// if (groupId) console.log({groupId, name})

		const indentDiff = indent-prevIndent
		const popAmount = Math.max(0, indentDiff*-1+1)

		range(popAmount).map(_=> parents.pop())
		
		const parentId = parents.pop()
		parents.push(parentId)
		parents.push(id)
		prevIndent = indent

		const row = {indentDiff, parentId, id, indent, name, groupId}
		// console.log(Object.values(row))
		return row
	})



	const nestit = ()=> {
		rows.map(r=> r.subnodes = [])
		const allEntries = rows.map(r=> [r.id, r]).reduce((o, [id, r])=> (o[id] = r, o), {})
		const missingParents = []

		rows.map(r=> {
			if (!r.parentId) return
			if (!(r.parentId in allEntries)) {
				missingParents.push({parentId: r.parentId, forId: r.id})
				return
			}
			const parent = allEntries[r.parentId]
			if (!parent.subnodes) console.dir(parent)
			parent.subnodes.push(r)
		})

		// console.dir(allEntries)
		// console.dir(missingParents)

		// const roots = rows.filter(r=> r.parentId === null)
		// const root = roots[0]
		// console.dir(roots)
		// console.dir(roots[0], {depth: 12})
		// fs.writeFileSync('./nested-sectors-after-parse.txt', nodeToOutline(root).join('\n'), 'utf-8')
	}


	const exportRows = rows.map(({id, parentId, name, groupId})=> {
		const o = ({id, parentId, name})
		if (groupId) o.groupId = groupId
		return o
	})
	const exportRowsJSON = '[\n\t'+exportRows.map(r=> JSON.stringify(r)).join(',\n\t')+'\n]'

	fs.writeFileSync('./nested-sectors-rows.json', exportRowsJSON, 'utf-8')
}



const range = i=> Array(i).fill().map((v, i)=> i)
const nodeToOutline = (node, indentationLevel = 0)=> {
	const useStrangeSpace = true
	const indentPrefix = range(indentationLevel).map(a=> useStrangeSpace?'  ':'  ').join('')
	const line = `${indentPrefix}${node.id}: ${node.name}`
	return [line, ...node.subnodes.map(n=> nodeToOutline(n, indentationLevel+1)).reduce((a, b)=> a.concat(b), [])]
}


main()
