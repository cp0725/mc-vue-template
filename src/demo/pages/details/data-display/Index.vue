<template>
	<div class="cmp-wrapper">
		<div class="page-block">
			<data-display></data-display>
		</div>

		<el-row :gutter="24">
		  <el-col :span="12">
				<div class="page-block">
					<tag-message-list></tag-message-list>
				</div>
		  </el-col>
		  <el-col :span="12">
				<div class="">
					<el-card-common></el-card-common>
				</div>
		  </el-col>
		</el-row>
		<div class="page-block">
			<el-carousel-common/>
		</div>
		<div class="page-block">
			<el-carousel-card/>
		</div>
	</div>
</template>


<script>
	import DataDisplay from './../../../blocks/data-display/index.js';
	import TagMessageList from './../../../blocks/tag-message-list/index.js';
	import ElCardCommon from './../../../blocks/el-card-common/index.js';

	import ElCarouselCommon from './../../../blocks/el-carousel-common/index.js';
	import ElCarouselCard from './../../../blocks/el-carousel-card/index.js';

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
			DataDisplay, TagMessageList, ElCardCommon,
			ElCarouselCard, ElCarouselCommon
		}
	}
</script>


<style lang="scss" scoped>
	.cmp-wrapper {

	}
</style>
