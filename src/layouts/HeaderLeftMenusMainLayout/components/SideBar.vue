<template>
  <div class="sidebar-container" :style="{width: isCollapse ? '80px' : '220px'}">
    <div class="sidebar-switch" @click="toggleMenu">
      <i :class="'el-icon-caret-' + (isCollapse ? 'right' : 'left')"></i>
    </div>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :collapse="isCollapse"
      :router="true"
      :default-active="currentRoutePath"
      @select="onSelectMenuItem">
      <template v-for="(item, index) in menus">
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
  import Logo from './Logo.vue'

  export default {
    name: 'SideBar',
    props: {
      menus: {
        type: Array
      },
      isCollapse: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentRoutePath: this.$route.fullPath || '/'
      }
    },
    watch: {
      '$route': {
        handler(){
          this.currentRoutePath = this.$route.fullPath || '/'
        },
        deep: true
      }
    },
    methods: {
      toggleMenu () {
        this.$emit('update:isCollapse', !this.isCollapse)
      },
      onSelectMenuItem (index) {
        this.currentRoutePath = index
      }
    },
    components: {
      Logo
    }
  }
</script>

<style lang="scss" scoped>
  $topBarHeight: 60px;
  .sidebar-container {
    background-color: #001529;
    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
    transition: width 0.28s;
    width: 220px;
    position: fixed;
    top: $topBarHeight;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    .sidebar-switch {
      line-height: 40px;
      background-color: #002140;
      text-align: center;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99999;
    }
    .el-menu {
      border-right:none;
      background-color: #00152a;
      height: 100%;
      overflow: auto;
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
