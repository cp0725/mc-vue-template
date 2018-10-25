<template>
  <div>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="card-header clearfix">
        <div style="flex:1">卡片名称</div>
        <div style="width:auto;">
          <el-button type="text">操作按钮</el-button>
        </div>
      </div>
      <div v-for="o in 8" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    .card-header{
      display:flex;
      align-items:center;
    }
    /deep/ .el-card__header{
      padding: 4px 10px;
    }
  }
</style>
