<template>
  <div className="empty-content">
    <div class="exception-content">
      <img src="./imgs/preview.png" class="imgException"/>
      <div>
        <h3 class="title">
          页面暂无内容～
        </h3>
        <p class="description">
          抱歉，页面暂无内容，请看看
          <a href="/" style="text-decoration:underline;">首页</a>
          继续浏览
        </p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'EmptyContent'
  }
</script>


<style lang="scss" scoped>

  $container-height: 70vh;

  .exception-content {
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      color: rgb(51, 51, 51);
    }
    .description {
      color: rgb(102, 102, 102);
    }
  }

  @media screen and (max-width: 1199px) and (min-width: 721px) {
    .exception-content {
      .imgException {
        max-width: 180px;
        margin-right: 30px;
      }
      .title {
        font-size: 20px;
        margin: 10px 0;
      }
      .description {
        font-size: 14px;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .exception-content {
      min-height: $container-height;

      .imgException {
        max-width: 260px;
        margin-right: 50px;
      }
      .title {
        font-size: 24px;
        margin: 20px 0;
      }
      .description {
        font-size: 16px;
      }
    }
  }
</style>
