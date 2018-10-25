<template>
	<div class="cmp-wrapper">
		<el-row :gutter="24">
		  <el-col :span="12">
				<div class="page-block">
					<radar-chart></radar-chart>
				</div>
		  </el-col>
		  <el-col :span="12">
				<div class="page-block">
					<gauge-chart></gauge-chart>
				</div>
		  </el-col>
		</el-row>
	</div>
</template>


<script>
	import GaugeChart from './../../../blocks/gauge-chart/index.js';
	import RadarChart from './../../../blocks/radar-chart/index.js';

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
			GaugeChart, RadarChart
		}
	}
</script>


<style lang="scss" scoped>
	.cmp-wrapper {

	}
</style>
