<template>
  <div>
    <router-view/>
    <!-- <el-popover placement="bottom" width="200" trigger="click">
      <el-form ref="siteOptions" :model="siteOptions" label-width="80px">
        <el-form-item>
          <el-radio-group v-model="siteOptions.layout" @change="changeLayout">
            <el-radio v-for="layout in allLayouts" :label="layout.id" :key="layout.id"
              style="display:block;line-height:2.5em;margin-left:0px;"
            >{{layout.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="reference" :class="`template-config-panel ${siteOptions.layout}`">
        <i class="el-icon-setting"></i>
      </div>
    </el-popover> -->

    <el-dropdown :class="`template-config-panel ${siteOptions.layout}`" @command="changeLayout">
      <i class="el-icon-setting"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="layout in allLayouts" :command="layout.id" :key="layout.id">{{layout.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  let layoutsConfig = {
    "layouts": [
      {
        "id": "HeaderLeftMainLayout",
        "name": "左侧菜单"
      }, 
      {
        "id": "HeaderMainLayout",
        "name": "顶部菜单"
      }, 
      // {
      //   "id": "HeaderLeftMenusMainLayout",
      //   "name": "顶部+左侧菜单"
      // }
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
      changeLayout(id){
        this.siteOptions.layout = id
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
    top: 0px;
    right: 100px;
    height: 60px;
    i{
      color: #c3c6cb;
      font-size: 18px;
      cursor: pointer;
      padding-top: 22px;
    }
  }
  .HeaderLeftMainLayout{
    i{
      color: #878787;
    }
  }

  .el-dropdown-link{
    position: fixed;
    z-index: 999999;
    top: 22px;
    right: 200px;
    color: red;    
  }
</style>
