<template>
	<div class="cmp-wrapper">
		<el-row :gutter="24">
		  <el-col :span="12">
				<div class="page-block">
					<div class="page-block-title">
						线形图
					</div>
	  			<line-chart></line-chart>
				</div>
		  </el-col>
		  <el-col :span="12">
				<div class="page-block">
					<normal-toggle-chart></normal-toggle-chart>
				</div>
		  </el-col>
		</el-row>
		<el-row :gutter="24">
			<el-col :span="12">
				<div class="page-block">
					<bar-chart></bar-chart>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="page-block">
					<histogram-chart></histogram-chart>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="24">
			<el-col :span="12">
				<div class="page-block">
					<pie-chart></pie-chart>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="page-block">
					<ring-chart></ring-chart>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="24">
			<el-col :span="12">
				<div class="page-block">
					<diy-toggle-chart></diy-toggle-chart>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="page-block">
					<funnel-chart></funnel-chart>
				</div>
			</el-col>
		</el-row>


	</div>
</template>


<script>
	import LineChart from './../../../blocks/line-chart/index.js';
	import NormalToggleChart from './../../../blocks/normal-toggle-chart/index.js';
	import BarChart from './../../../blocks/bar-chart/index.js';
	import HistogramChart from './../../../blocks/histogram-chart/index.js';
	import PieChart from './../../../blocks/pie-chart/index.js';
	import RingChart from './../../../blocks/ring-chart/index.js';
	import FunnelChart from './../../../blocks/funnel-chart/index.js';
	import DiyToggleChart from './../../../blocks/diy-toggle-chart/index.js';

	export default {
		name: '',
		props: {},
		data(){
			return {}
		},
		computed: {},
		created() {},
		mounted() {},
		methods: {},
		components: {
			LineChart, BarChart, PieChart, RingChart,
			NormalToggleChart, HistogramChart, DiyToggleChart,
			FunnelChart
		}
	}
</script>


<style lang="scss" scoped>
	.cmp-wrapper {

	}
</style>
