<template>
	<div class="v-middle logo" @click="toIndex">
		<template v-if="isMenuOpened">
			<img src="../assets/logo.png">
			<span class="site-name">资源审核系统</span>
		</template>
		<template v-else>
			<img src="../assets/logo-min.png" style="height:36px;">
		</template>
	</div>
</template>

<script>
	export default {
		data(){
      return {
        isMenuOpened: true
      }
    },
		created(){
      window._dc.$on('toggle-menu', isMenuOpened => {
        this.isMenuOpened = isMenuOpened
      })
    },
		methods: {
			toIndex(){
				window.location.hash = '/'
			}
		}
	}
</script>

<style lang="scss" scoped>
	$topBarHeight: 60px;
  .logo {
    height: $topBarHeight;
		cursor: pointer;
		justify-content: left;
    .site-name{
      color: #FFF;
	    display: inline-block;
	    font-size: 18px;
	    //font-weight: 600;
	    margin: 0 0 0 12px;
	    vertical-align: middle;
	    height: 32px;
    	padding: 2px 0;
    }
    img{
			width: 62px;
			transition: height .3s;
    }
  }
</style>
