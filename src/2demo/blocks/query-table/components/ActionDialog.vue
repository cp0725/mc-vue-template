<template>
  <div :style="style.dialog">
    <el-button
      v-if="type === 'add'"
      @click="handleClick"
      type="primary"
      size="small">
      新建
    </el-button>
    <el-button
      v-if="type === 'edit'"
      @click="handleClick"
      type="text">
      编辑
    </el-button>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" class="form-dialog">
      <el-form :model="form" label-width="100px" ref="ruleForm">
        <el-form-item label="模板名称" prop="title">
          <el-input v-model="form.title" placeholder="模板名称"></el-input>
        </el-form-item>
        <el-form-item label="通知紧急程度" prop="level">
          <el-select v-model="form.level" placeholder="通知紧急程度">
            <el-option label="普通" value="普通"></el-option>
            <el-option label="警告" value="警告"></el-option>
            <el-option label="紧急" value="紧急"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="通知展示类型" prop="displayType">
          <el-select v-model="form.displayType" placeholder="通知展示类型">
            <el-option label="通知---标准" value="通知---标准"></el-option>
            <el-option label="通知---到货提醒" value="通知---到货提醒"></el-option>
            <el-option label="通知---优惠卷到期提醒" value="通知---优惠卷到期提醒"></el-option>
            <el-option label="订单---备货通知" value="订单---备货通知"></el-option>
            <el-option label="订单---配送通知" value="订单---配送通知"></el-option>
            <el-option label="订单---送达通知" value="订单---送达通知"></el-option>
            <el-option label="资金流转---订单待付款" value="资金流转---订单待付款"></el-option>
            <el-option label="资金流转---欠款警告" value="资金流转---欠款警告"></el-option>
            <el-option label="资金流转---押金提醒" value="资金流转---押金提醒"></el-option>
            <el-option label="资金流转---退款通知" value="资金流转---退款通知"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属系统" prop="system">
          <el-select v-model="form.system" placeholder="所属系统">
            <el-option label="订单" value="订单"></el-option>
            <el-option label="金融" value="金融"></el-option>
            <el-option label="运营" value="运营"></el-option>
            <el-option label="北极星" value="北极星"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="约定参数" prop="params">
          <el-select v-model="form.params" multiple placeholder="约定参数">
            <el-option label="ssu_id" value="ssu_id"></el-option>
            <el-option label="ding_time" value="ding_time"></el-option>
            <el-option label="sub_name" value="sub_name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关联参数" prop="associateId">
          <el-select v-model="form.associateId" placeholder="关联参数">
            <el-option label="无关联" value="无关联"></el-option>
            <el-option label="ssu_id" value="ssu_id"></el-option>
            <el-option label="ding_time" value="ding_time"></el-option>
            <el-option label="sub_name" value="sub_name"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      default () {
        return {}
      },
    },
    type: {
      type: String,
      default: ''
    },
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
      dialogVisible: false,
      form: {
        title: '',
        level: '',
        displayType: '',
        associateId: '',
        params: '',
        system: ''
      }
    }
  },
  computed: {
    dialogTitle () {
      return this.action === 'add'
        ? '新建模板'
        : '编辑模板'
    }
  },
  methods: {
    initForm () {
      this.form = Object.assign({}, this.form, this.row)
    },
    handleClick() {
      this.initForm()
      this.dialogVisible = true
    },
    handleConfirm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) return false

        this.$emit('confirm', this.form, this.index)
        this.dialogVisible = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-dialog {
    /deep/ .el-select {
      display: block;
    }
  }
</style>
