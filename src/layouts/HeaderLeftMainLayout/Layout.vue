<template>
  <el-container class="app-wrapper">
    <el-aside :width="isMenuOpened ? '220px' : '80px'">
      <side-bar/>
    </el-aside>
    <el-container>
      <el-header>
        <top-bar/>
      </el-header>
      <el-main class="main-container">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import TopBar from './components/TopBar.vue'
  import SideBar from './components/SideBar.vue'

  export default {
    name: 'HeaderLeftMainLayout',
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
    components: {
      TopBar,
      SideBar,
    },
  };
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
      padding: 24px;
      min-height: 100vh;
      background-color: #f0f2f5;
    }
  }
</style>
