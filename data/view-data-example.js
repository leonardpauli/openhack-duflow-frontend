const a = {
	perspective: {
		levels: [["Sectors", "Subsectors", "Countries"], ["Sectors", "Countries"]],
		countryColorOptions: ["By impact efficiency", "By corruptness"],
		__segmentsToInclude: [],
		__segmentsToExclude: [],
	},
	overview: {
		root: {
			sizeValue: null,
			hue: 0,
			title: "ROOT",
			// eg. sector->subsector->country, country.sizeValue =
			// 	SectorAid{recipient = country, sector = subsector}.amount
			subnodes: [{
				sizeValue: null,
				hue: 0.4,
				title: "Education",
				subnodes: [{
					sizeValue: null,
					hue: 0.7,
					title: "School Admin",
					subnodes: [],
				}, {
					sizeValue: null,
					hue: 0.11,
					title: "Mosquitooos",
					subnodes: [{
						sizeValue: 34,
						hue: 0.11,
						title: "Arabiemirati",
						subnodes: [],
					}, {
						sizeValue: 57,
						hue: 0.11,
						title: "Sweeed",
						subnodes: [],
					}, {
						sizeValue: 38,
						hue: 0.11,
						title: "Germannyyyyd",
						subnodes: [],
					}],
				}],
			}, {
				sizeValue: null,
				hue: 0.6,
				title: "Health",
				subnodes: [],
			}, {
				sizeValue: null,
				hue: 0.8,
				title: "Business",
				subnodes: [],
			}],
		}
	},
	table: {
		list: [{
			country: "Arabiiis",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.2,
		}, {
			country: "Sweeed",
			sector: "Education - Mosquitooos",
			goal: "Mosquitooos cakes",
			progress: {
				controlGroup: [2.3, 2.5, 2.2, 3.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.1,
		}],
	},
}



const fs = require('fs')


fs.writeFileSync('./view-data-example.json', JSON.stringify(a), 'utf-8')




