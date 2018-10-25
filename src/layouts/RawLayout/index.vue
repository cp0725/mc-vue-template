<template>
  <div class="app-wrapper">
	  <div class="main-container">
	  	<router-view></router-view>
	  </div>
	</div>
</template>


<script>
	export default {
	  name: 'RawLayout'
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
    .main-container {
      position: relative;
      padding: 24px;
      min-height: 100vh;
    }
  }
</style>
