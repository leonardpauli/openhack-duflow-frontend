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
					.td.progress n/a
						// {{row.progress}}
					.td.strategy {{row.recommendedStrategy}}
					.td.score {{row.impactEfficiencyIndicator}}
					

</template>
<script>
import demoViewData from './demoViewData.js'

export default {
	data: ()=> ({
		...demoViewData,
	}),
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
				$size = 300px
				width $size
				height $size
				background-color black
				display: flex
				justify-content center
				align-items center
				.circle
					width: 80%
					height: 80%
					background-color green
					border-radius: 1000px
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