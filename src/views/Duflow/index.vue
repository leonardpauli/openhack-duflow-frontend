<template lang="pug">
.duflow
	.header
		.title
			h1 How do we best use taxpayers money, as monitary aid, to reduce poverty in the world?
			h4
				span reduce poverty in the world
				| by working towards development goals, grouped into sectors, grouped by country
		//- .legend
			h1 Legend
	.flow
		.perspective
			h3 Perspective
			.row
				.label Levels
				.box(v-for="(levelsConfig, index) in perspective.levels", :key="index", v-if="index===0")
					.line(v-for="level in levelsConfig", :key="level") {{level}}
			.row
				.label Country color
				.box(v-for="(option, index) in perspective.countryColorOptions", :key="index", v-if="index===0")
					.line {{option}}
			.row
				.label Segments to Include
				.box.gray
					.line Education
						.line Administration
							.line.not-gray Lectorial
			.row
				.label Segments to Exclude from Included
					.line.gray (none)
		.overview
			h3 Overview
			.circular-flame-chart
				.circle
		.projects
			h3 Projects
			.table
				.tr
					.th(v-for="title in table.headers", :key="title") {{title}}
				.tr(v-for="row in table.list", :id="row.id")
					.td.country {{row.country}}
					.td.sector {{row.sector}}
					.td.goal {{row.goal}}
					.td.progress
						// {{row.progress}}
						svg#mybox(width='100%', height='50px', viewBox='0 0 100 100', fill='none', preserveAspectRatio="none")
							mask#mask0(mask-type='alpha', maskUnits='userSpaceOnUse', x='0', y='0', width='100', height='100')
								rect(width='100', height='100', fill='url(#paint0_linear)')
							g(mask='url(#mask0)')
								path(:d='pathDFromData(row.progress.controlGroup)', stroke='#BABABA')
								path(:d='pathDFromData(row.progress.controlGroupNot)', stroke='#50B6CC')
								path(:d='pathDFromDataDiff(row.progress)', stroke='url(#paint1_linear)')
							defs
								linearGradient#paint0_linear(x1='50', y1='50', x2='0', y2='50', gradientUnits='userSpaceOnUse')
									stop(stop-color='#C4C4C4')
									stop(offset='1', stop-color='#C4C4C4', stop-opacity='0')
								linearGradient#paint1_linear(x1='50', y1='0', x2='50', y2='100', gradientUnits='userSpaceOnUse')
									stop(stop-color='#00EF0A')
									stop(offset='1', stop-color='#FF5C00')
					.td.strategy {{row.recommendedStrategy}}
					.td.score {{row.impactEfficiencyIndicator}}
			img(src="./legend.png", width="1000px", style="margin-top: 50px")

</template>
<script>
import demoViewData from './demoViewData.js'


const valuesToPath = (values, isFactor=false)=> {
	const len = values.length

	const _max = values.reduce((a, b)=> Math.max(a, b))
	const _min = values.reduce((a, b)=> Math.min(a, b))
	const span = Math.max(Math.abs(1-_max), Math.abs(1-_min))
	const max = isFactor ? 1+span : _max
	const min = isFactor ? 1-span : _min
	
	const norm = values.map(v=> (v-min)/(max-min) || 0)
	const d = 'M'+norm.map((y, i)=> [i/(len-1), 1-y]).map(([x, y])=> `${x*100} ${y*100}`).join(' L')
	return d
}

export default {
	data: ()=> ({
		...demoViewData,
	}),
	methods: {
		pathDFromData (values) {
			return valuesToPath(values)
		},
		pathDFromDataDiff (progress) {
			const cgvs = progress.controlGroup
			const cnvs = progress.controlGroupNot

			const dvs = cgvs.map((cgv, i)=> {
				const cnv = cnvs[i]
				const diffFactor = cnv/cgv
				return diffFactor
			})

			return valuesToPath(dvs, true)
		}
	}
}
</script>
<style lang="stylus" scoped>

.duflow
	margin-top 40px
	margin-left 30px
	.header
		.title
			// h1
			h4
				opacity 0.9
				span
					opacity 0.7
					margin-right 5px
		// .legend
		//	h1
		margin-bottom: 40px
	.flow
		display flex
		flex-direction row
		& > *:not(:last-child)
			margin-right: 50px
		.perspective
			flex-shrink 0
			h3
				margin-bottom: 10px

			.row
				.label > .label
					padding-left 20px
				.box
					margin-top: 5px
					padding 7px 9px
					background #eee
					// .line
				margin-bottom: 25px
			.gray
				opacity 0.8
			.not-gray
				opacity 1

		.overview
			// h3
			.circular-flame-chart
				$size = 370px
				width $size
				height $size
				background-color black
				display: flex
				justify-content center
				align-items center
				background url('./overview-1.png')
				background-repeat no-repeat
				background-size cover
				.circle
					$size = 17%
					width $size
					height $size
					background-color black
					border-radius: 1000px
					transform translateX(12px) translateY(-7px)
		.projects
			// h3
			.table
				display flex
				flex-direction column
				.tr
					display flex
					flex-direction row
					.td, .th
						width 250px
						flex-shrink: 0
						text-align left
						padding 5px
						&.th
							font-weight bold
					.td:not(:last-child)
						border-right 1px solid #ccc
					&:first-child
						border-bottom 2px solid #aaa
					&:nth-child(2n+1):not(:first-child)
						background-color #eee
				// tr
				// 	.country
				// 	.sector
				// 	.goal
				// 	.progress
				// 		// {{row.progress}}
				// 	.strategy
				// 	.score

</style>