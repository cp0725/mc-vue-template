<template>
  <el-container class="app-wrapper">
    <el-header>
      <top-bar/>
    </el-header>
    <el-container>
      <el-aside :style="{width: isCollapse ? '80px' : '220px'}" v-if="sideMenus && sideMenus.length">
        <side-bar :menus="sideMenus" :isCollapse.sync="isCollapse" />
      </el-aside>
      <el-main class="main-container">
        <breadcrumb style="margin: -24px -24px 24px;"></breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { asideMenuConfig } from './../../menuConfig'
  import { getPageRouterList } from './../../layout-util.js'
  import TopBar from './components/TopBar'
  import SideBar from './components/SideBar'
  import Breadcrumb from './components/Breadcrumb'

  export default {
    name: 'HeaderLeftMenusMainLayout',
    components: {
      TopBar,
      SideBar,
      Breadcrumb
    },
    data(){
      return {
        sideMenus: this.getSideMenu(),
        isCollapse: false
      }
    },
    watch: {
      '$route': {
        handler(){
          this.sideMenus = this.getSideMenu();
        }
      }
    },
    methods: {
      getSideMenu() {
        let pageRouterList = getPageRouterList(asideMenuConfig, this.$route.fullPath)
        let rootMenu = pageRouterList[0]
        let childMenus = JSON.parse(JSON.stringify(rootMenu['children'] || [])) ;
        childMenus.forEach(menu=>{
          menu['path'] = rootMenu['path'] + menu['path']
        })
        return childMenus
      }
    }
  };
</script>

<style lang="scss" scoped>
  $topBarHeight: 60px;
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
      height: 60px!important;
      padding: 0;
    }
    .main-container {
      position: relative;
      // padding: 24px;
      padding: 20px;
      // min-height: 100vh;
      background-color: #f0f2f5;
    }
  }
</style>
