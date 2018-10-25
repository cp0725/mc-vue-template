<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-left">
        <logo/>
      </div>
      <div class="top-bar-menu">
        <el-menu
          mode="horizontal"
          :show-timeout="200"
          :collapse="false"
          :router="true"
          :default-active="currentRoutePath"
          @select="onSelectMenuItem">
          <template v-for="item in topMenus">
            <el-menu-item v-if="!item.children" :index="item.path">
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
            <el-submenu v-else :index="item.name || item.path">
              <template slot="title">
                <i v-if="item.icon" :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <template v-for="child in item.children" v-if="!child.hidden">
                <el-menu-item :index="item.path + child.path">
                  <span>{{child.name}}</span>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </div>
      <div class="top-bar-right">
        <div class="user-help">
          <i>?</i>
        </div>
        <div class="user-profile-content">
          <el-dropdown>
            <div class="v-middle user-info">
              <span class="user-name">管理员</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/">
                <el-dropdown-item>后台首页</el-dropdown-item>
              </router-link>
              <el-dropdown-item>
                <span @click="logout" style="display:block;">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Logo from './Logo.vue'
  import { asideMenuConfig } from './../../../menuConfig'
  import { getRootMenus, getRootMenuIndexByRouterPath } from './../../../layout-util'

  export default {
    name: 'TopBar',
    data() {
      return {
        topMenus: getRootMenus(asideMenuConfig),
        currentRoutePath: ''
      }
    },
    mounted(){
      this.getCurrentRouterPath()
    },
    watch: {
      '$route': {
        handler(){
          this.getCurrentRouterPath()
        }
      }
    },
    methods: {
      getCurrentRouterPath(){
        let rootMenuIndex = getRootMenuIndexByRouterPath(asideMenuConfig, this.$route.fullPath)
        if(rootMenuIndex != -1) {
          this.currentRoutePath = this.topMenus[rootMenuIndex]['path']
        } else {
          this.currentRoutePath = '/'
        }
      },
      onSelectMenuItem(index){
        this.currentRoutePath = index
      },
      logout() {
        console.log('Logout');
      }
    },
    components: {
      Logo
    }
  }
</script>


<style lang="scss" scoped>
  $topBarHeight: 60px;
  $menuBackground: #002140;
  .top-bar {
    display: flex;
    height: $topBarHeight;
    background-color: #002140;
    color: #fff;
    position: fixed;
    left:0;
    right: 0;
    top: 0;
    z-index: 9;
    .top-bar-left{
      width: 220px;
      padding-left: 18px;
      .page-title {
        line-height: $topBarHeight;
        letter-spacing: 1px;
      }
    }
    .top-bar-menu{
      flex: 1;
      /deep/ > .el-menu{
        background-color: transparent!important;
        border-bottom: none;
        .el-menu-item:first-child {
          padding-left: 0;
        }
        .el-menu-item, .el-submenu__title{
          color: hsla(0,0%,100%,.65);

          &:hover, &:focus{
            background-color: transparent!important;
            color: #FFFFFF;
            > i {
              color: #FFFFFF;
            }
          }
        }
        .el-menu-item, .el-submenu{
          position: relative;
          border-bottom: none;
          &.is-active{
            color: #FFFFFF!important;
            > .el-submenu__title{
              border-bottom: none;
              color: #FFFFFF!important;
              i {
                color: #FFFFFF!important;
              }
            }
            &:after{
              content: '';
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 0px 8px 8px 8px;
              border-color: transparent transparent #FFFFFF transparent;
              position: absolute;
              bottom: 0;
              left: calc(50% - 4px);
            }
          }
        }
        [class^="fas"] {
          vertical-align: middle;
          margin-right: 5px;
          width: 24px;
          text-align: center;
          font-size: 15px;
        }
      }
      /deep/ .el-menu-item {
        height: $topBarHeight;
        line-height: $topBarHeight - 2;
        &:hover, &:focus{
          color: #FFFFFF;
        }
      }
      /deep/ .el-submenu__title{
        height: $topBarHeight;
        line-height: $topBarHeight - 2;
      }
    }
    .top-bar-right{
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      padding-right: 20px;
      .user-help {
        margin-right: 10px;
        cursor: pointer;
        line-height: 1;
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          line-height: 1;
          font-size: 12px;
          font-style: normal;
          border-radius: 50%;
          border: 1px solid #fff;
          text-align: center;
        }
      }
      .user-profile-content {
        .user-info {
          position: relative;
          height: $topBarHeight;
          color: rgba(255, 255, 255, 0.65);
          &:hover{
            color: #FFF;
          }
          .fa-user{
            font-size: 16px;
            margin-right: 5px;
          }
          .user-avatar {
            width: 24px;
            height: 24px;
            margin: 0 8px 0 12px;
            border-radius: 4px;
          }
          .user-name {}
        }
      }
    }
  }
</style>
