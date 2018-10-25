<template>
  <div :style="style.dialog">
    <el-popover
      placement="bottom"
      width="160"
      v-model="visible">
      <p>确认废弃？</p>
      <div style="text-align: left; margin: 0">
        <el-button type="danger" size="mini" @click="handleHide(1)">确认</el-button>
        <el-button size="mini" @click="handleHide(0)">关闭</el-button>
      </div>
      <el-button type="text" slot="reference">废弃</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      style: {
        dialog: {
          display: 'inline-block',
          marginRight: '5px',
        },
      },
      visible: false,
    };
  },
  methods: {
    handleHide(code) {
      if (parseInt(code) === 1) {
        this.$emit('delete', this.index)
      }
      this.visible = false
    }
  }
}
</script>
