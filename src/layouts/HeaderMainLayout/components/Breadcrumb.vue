<template>
  <div class="rad-breadcrumb" v-if="breadcrumb.length">
    <div class="title"> {{ breadcrumb[breadcrumb.length - 1]['name'] }} </div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
  import { asideMenuConfig } from './../../../menuConfig'
  import { getPageRouterList } from './../../../layout-util'
  export default {
    computed: {
      breadcrumb () {
        let routerPath = this.$route.fullPath
        if(routerPath != '/') {
          return getPageRouterList(asideMenuConfig, routerPath);
        } else {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rad-breadcrumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px;
    line-height: 50px;
    background-color: #fff;
    .title {
      letter-spacing: 1px;
      font-size: 16px;
      font-weight: bold;
    }
    .el-breadcrumb {
      /deep/ .el-breadcrumb__item {
        .is-link {
          font-weight: normal;
        }
        &:last-child {
          .el-breadcrumb__inner {
            font-weight: 700;
          }
        }
      }
    }
  }
</style>
