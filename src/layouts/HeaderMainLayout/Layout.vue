<template>
  <el-container class="app-wrapper">
	  <el-header>
      <top-bar/>
    </el-header>
	  <el-main class="main-container">
	  	<router-view></router-view>
	  </el-main>
	</el-container>
</template>


<script>
  import TopBar from './components/TopBar.vue'
	export default {
	  name: 'HeaderMainLayout',
	  components: {
      TopBar
    }
	}
</script>


<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
    /deep/ .el-header{
      height: auto!important;
      padding: 0;
    }
    .main-container {
      position: relative;
      // padding: 60px 0 0 0;
      padding: 80px 20px 20px 20px;
      // min-height: 100vh;
      background-color: #f0f2f5;
    }
  }
</style>
