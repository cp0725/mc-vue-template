<template>
  <div>
    <router-view/>
    <el-popover
      placement="top"
      width="300"
      trigger="click">
      <el-form ref="siteOptions" :model="siteOptions" label-width="80px">
        <el-form-item label="改变布局">
          <el-radio-group v-model="siteOptions.layout" @change="changeLayout">
            <el-radio
              v-for="layout in allLayouts"
              :label="layout.id"
              :key="layout.id"
              style="display:block;line-height:2.5em;margin-left:0px;"
            >{{layout.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="reference" class="template-config-panel">
        <i class="el-icon-setting"></i>
      </div>
    </el-popover>
  </div>
</template>

<script>
  let layoutsConfig = {
    "layouts": [
      {
        "id": "HeaderLeftMainLayout",
        "name": "左侧菜单"
      }, {
        "id": "HeaderMainLayout",
        "name": "顶部菜单"
      }, {
        "id": "HeaderLeftMenusMainLayout",
        "name": "顶部+左侧菜单"
      }
    ],
  	"default": "HeaderLeftMainLayout"
  }

  export default {
    data(){
      return {
        siteOptions: {
          layout: localStorage.getItem('fav-layout') || layoutsConfig['default']
        }
      }
    },
    computed: {
      allLayouts(){
        return layoutsConfig['layouts']
      }
    },
    methods: {
      changeLayout(){
        localStorage.setItem('fav-layout', this.siteOptions.layout)
        this.$nextTick(()=>{
          window.location.reload()
        }, 500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .template-config-panel{
    position: fixed;
    z-index: 999999;
    right: 10px;
    bottom: 10px;
    i{
      font-size: 30px;
      cursor: pointer;
    }
  }
</style>
