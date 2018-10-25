<template>
  <div class="sidebar-container" :style="{width: isMenuOpened ? '220px' : '80px'}">
    <div class="logo-wrapper">
      <logo/>
    </div>
    <el-menu mode="vertical"
      :collapse="!isMenuOpened"
      :router="true"
      :default-active="currentRoutePath"
      @select="onSelectMenuItem">
      <template v-for="item in asideMenuConfig">
        <el-menu-item v-if="!item.children" :index="item.path">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.name || item.path" :key="item.name">
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
</template>


<script>
  //import { asideMenuConfig } from '../../../menu';
  import { asideMenuConfig } from '../../../menuConfig';
  import Logo from './Logo.vue'
  export default {
    name: 'SideBar',
    data() {
      return {
        asideMenuConfig,
        currentRoutePath: this.$route.fullPath || '/',
        isMenuOpened: true
      }
    },
    created(){
      window._dc.$on('toggle-menu', isMenuOpened => {
        this.isMenuOpened = isMenuOpened
      })
    },
    methods: {
      onSelectMenuItem(index){
        this.currentRoutePath = index
      }
    },
    components: {
      Logo
    }
  }
</script>


<style lang="scss" scoped>

  $menuWidth: 256px;
  $topBarHeight: 60px;
  $menuBackground: #001529;

  .sidebar-container {
    background-color: $menuBackground;
    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
    transition: width 0.28s;
    width: $menuWidth;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    * {
      transition: all .3s;
    }
    .logo-wrapper{
      background-color: #002140;
      padding-left: 20px;
    }
    /deep/ > .el-menu {
      padding: 16px 0px;
      border-right:none;
      background-color: #00152a;
      height: calc(100% - 60px);
      overflow: auto;
      [class^="fas"] {
        vertical-align: middle;
        margin-right: 10px;
        width: 24px;
        text-align: center;
        font-size: 12px;
      }
      .el-menu-item, .el-submenu__title{
        color: hsla(0,0%,100%,.65);
        line-height: 46px;
        height: 46px;
        &:hover, &:focus{
          background-color: transparent;
          color: #f0f2f5;
          > i {
            color: #f0f2f5;
          }
        }
        &.is-active{
          background-color: #1890FF!important;
          color: #f0f2f5!important;
        }
      }
      .el-submenu{
        .el-submenu__title{
          .el-submenu__icon-arrow{
            font-weight: bolder;
            font-size: 12px;
            right: 10px;
          }
        }
        .el-menu-item {
          padding: 0 16px;
          font-size: 14px;
          line-height: 46px;
          height: 46px;
          margin-top: 4px;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          > span {
            padding-left: 5px;
          }
          &:last-child{
            margin-bottom: 4px;
          }
          * {
            vertical-align: initial;
          }
        }
        &.is-active{
          .el-submenu__title{
            color: #f0f2f5!important;
            i{
              color: #f0f2f5!important;
            }
          }
        }
        .el-menu{
          padding: 4px 0px;
          background: #000c17;
          box-shadow: inset 0 2px 8px rgba(0,0,0,.45);
        }
      }
      i{
        font-size: 14px;
        margin-right: 10px;
        width: auto!important;
      }
      &.el-menu--collapse{
        width: 80px;
        > .el-menu-item{
          text-align: center;
          > i{
            margin-right: 0px;
            font-size: 16px;
          }
          &.is-active{
            background-color: transparent!important;
          }
        }
        > .el-submenu{
          > .el-submenu__title{
            text-align: center;
            > i{
              margin-right: 0px;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">

</style>
