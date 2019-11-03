const demoViewData = {
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
			subnodes: [{ //root 1: who_sanittot 	*epi_watsup : "Access to Drinking Water"  - 39
				sizeValue: 13947.39613,
				hue: 0.4,
				title: "Health", // from pdf
				subnodes: [{
					sizeValue: 13947.39613,
					hue: 0.6,
					title: "Total population using basic sanitation services (%)", // from pdf
					subnodes: [],
				}, {
					sizeValue: 13947.39613,
					hue: 0.11,
					title: "Water and Sanitation", // from oecd
					subnodes: [{
						sizeValue: 2599.345,
						hue: 0.11,
						title: "Afghanistan",
						subnodes: [],
					}, {
						sizeValue: 3230.661,
						hue: 0.11,
						title: "Yemen",
						subnodes: [],
					}, {
						sizeValue: 8117.391,
						hue: 0.11,
						title: "Zambia",
						subnodes: [],
					}],
				}],
			}, { // root 2: bl_asyf , obs. multiple categpries, update: bl_asyfm
				sizeValue: 20225.56,
				hue: 0.5,
				title: "Education",
				subnodes: [{
					sizeValue: 20225.56,
					hue: 0.7,
					title: "Average Schooling Years, Female and Male",
					subnodes: [],
				}, {
					sizeValue: 20225.56,
					hue: 0.12,
					title: "Education total", // from oecd
					subnodes: [{
						sizeValue: 12719.19,
						hue: 0.12,
						title: "Afghanistan",
						subnodes: [],
					}, {
						sizeValue: 4101.971,
						hue: 0.12,
						title: "Yemen",
						subnodes: [],
					}, {
						sizeValue: 3404.393,
						hue: 0.12,
						title: "Zambia",
						subnodes: [],
					}],
				}],
			}],
		}
	},
	table: {
		headers: [
			'Country',
			'Sector',
			'Goal',
			'Progress',
			'Recommended Strategy',
			'Impact Efficiency Score',
		],
		list: [{ // money amount: 2599.345 
			country: "Afghanistan",
			sector: "Health - Water and Sanitation",
			goal: "Total population using basic sanitation services (%)",
			progress: {
				controlGroup: [2.3, 1.5, 1.2, 1.11],
				controlGroupNot: [2.3, 2.34, 2.28, 2.37],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 1.2,
		}, { // amount = 3230.661
			country: "Yemen",
			sector: "Health - Water and Sanitation",
			goal: "Total population using basic sanitation services (%)",
			progress: {
				controlGroup: [2.7, 0.5, 0.2, 0.11],
				controlGroupNot: [2.7, 3.34, 4.28, 5.33],
				__diff: [],
			},
			recommendedStrategy: "Increase",
			impactEfficiencyIndicator: 2.7,
		}, { // 8117.391
			country: "Zambia",
			sector: "Health - Water and Sanitation",
			goal: "Total population using basic sanitation services (%)",
			progress: {
				controlGroup: [2.1, 2.7, 2.2, 2.11],
				controlGroupNot: [2.1, 2.1, 2.1, 2.1],
				__diff: [],
			},
			recommendedStrategy: "Decrease", // mockup suggestions
			impactEfficiencyIndicator: 0.2,  // mockup values
		}],
	},
}


export default demoViewData
