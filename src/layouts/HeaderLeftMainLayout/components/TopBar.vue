<template>
  <div class="top-bar">
    <div class="top-bar-header">
      <div class="top-bar-toggle-menu" :class="{collapsed: !isMenuOpened}" @click="toggleMenu">
        <i class="el-icon-caret-left"></i>
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
    <div class="top-bar-breadcrumb">
      <breadcrumb />
    </div>
  </div>
</template>


<script>
  import Breadcrumb from './Breadcrumb'

  export default {
    name: 'TopBar',
    components: {
      Breadcrumb
    },
    data(){
      return {
        isMenuOpened: true
      }
    },
    methods: {
      logout() {
        console.log('Logout');
      },
      toggleMenu(){
        this.isMenuOpened = !this.isMenuOpened
        window._dc.$emit('toggle-menu', this.isMenuOpened)
      }
    }
  }
</script>


<style lang="scss" scoped>
  $topBarHeight: 60px;
  .top-bar-header {
    height: $topBarHeight;
    display: flex;
    justify-content: space-between;
    padding-right: 1em;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    position: relative;
    z-index: 9;
    .top-bar-toggle-menu{
      cursor: pointer;
      width: $topBarHeight;
      text-align: center;
      line-height: 60px;
      font-size: 24px;
      color: #CCC;
      .el-icon-caret-left{
        transition: all .3s;
      }
      &:hover{
        //background: rgba(0,0,0,.025);
        color: #AAA;
      }
      &.collapsed {
        .el-icon-caret-left{
          transform: rotate(180deg);
        }
      }
    }
    .top-bar-left{
      flex: 1;
      .page-title{
        line-height: $topBarHeight;
        letter-spacing: 1px;
        font-size: 16px;
        font-weight: bold;
      }
    }
    .top-bar-right{
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
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
          border: 1px solid #000;
          text-align: center;
        }
      }
      .user-profile-content {
        .user-info {
          position: relative;
          height: $topBarHeight;
          color: rgba(0,0,0,.65);
          &:hover{
            color: #000;
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
        }
      }
    }
  }
</style>
