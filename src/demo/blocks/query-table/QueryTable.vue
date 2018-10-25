<template>
	<div class="cmp-wrapper">
		<div class="form-container">
			<el-form :inline="true" :model="form" size="small" class="form-inline" ref="form">
				<el-form-item label="系统" prop="system">
					<el-select v-model="form.system" placeholder="系统">
						<el-option label="全部" value="0"></el-option>
						<el-option label="促销" value="1"></el-option>
						<el-option label="商城" value="2"></el-option>
						<el-option label="订单" value="3"></el-option>
						<el-option label="金融" value="4"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态" prop="status">
					<el-select v-model="form.status" placeholder="状态">
						<el-option label="全部" value="0"></el-option>
						<el-option label="未读" value="1"></el-option>
						<el-option label="已读" value="2"></el-option>
						<el-option label="失效" value="3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="模板" prop="template" v-show="expandForm">
					<el-select v-model="form.template" placeholder="模板">
						<el-option label="全部" value="0"></el-option>
						<el-option label="模板1" value="1"></el-option>
						<el-option label="模板2" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="级别" prop="level" v-show="expandForm">
					<el-select v-model="form.level" placeholder="级别">
						<el-option label="全部" value="0"></el-option>
						<el-option label="普通" value="1"></el-option>
						<el-option label="报警" value="2"></el-option>
						<el-option label="警告" value="3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="唯一标识" prop="uid" v-show="expandForm">
					<el-input v-model="form.uid" placeholder="唯一标识"></el-input>
				</el-form-item>
				<el-form-item label="商户id" prop="merchantId" v-show="expandForm">
					<el-input v-model="form.merchantId" placeholder="商户id"></el-input>
				</el-form-item>
				<el-form-item :style="expandStyle">
					<el-button size="small" type="primary" @click="handleSearch">查询</el-button>
					<el-button size="small" type="primary" @click="resetForm('form')">重置</el-button>
					<el-button size="small" type="text" @click="expandForm = !expandForm" v-if="isShowExpand">
						{{ expandForm ? '收起' : '展开' }}
						<i :class="expandForm ? 'el-icon-arrow-up': 'el-icon-arrow-down'"></i>
					</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="table-container">
			<div class="table-header">
				<div class="left">
					<action-dialog type="add" @confirm="handleAdd"></action-dialog>
					<el-button type="primary" size="small">导入/导出</el-button>
				</div>
				<div class="right"></div>
			</div>
			<div class="table-info">
				<i class="el-icon-info"></i>
				已选项 <span class="num"> {{ table.selection.length }}</span> 项
				<el-button type="text" @click="toggleSelection()">清空</el-button>
			</div>
			<el-table
				:data="table.data"
				@selection-change="handleSelectionChange"
				style="width: 100%"
				:header-cell-style="{padding: '20px 0', backgroundColor: '#fafafa'}"
				ref="multipleTable">
				<el-table-column label="id" type="selection" prop="id"></el-table-column>
				<el-table-column label="名称" prop="title"></el-table-column>
				<el-table-column label="紧急度" prop="level"></el-table-column>
				<el-table-column label="接收端" prop="terminal"></el-table-column>
				<el-table-column label="展示类型" prop="displayType" width="150px"></el-table-column>
				<el-table-column label="关联标识" prop="associateId"></el-table-column>
				<el-table-column label="约定参数">
					<template slot-scope="scope">
						{{ scope.row.params.join(', ') }}
					</template>
				</el-table-column>
				<el-table-column label="状态" prop="status"></el-table-column>
				<el-table-column label="失效时间" prop="expire" width="120px"></el-table-column>
				<el-table-column label="所属系统" prop="system"></el-table-column>
				<el-table-column label="操作" width="150px">
					<template slot-scope="scope">
						<action-dialog type="edit" :row="scope.row" :index="scope.$index" @confirm="handleEdit"></action-dialog>
						<delete-ballon :index="scope.$index" @delete="handleDelete"></delete-ballon>
						<el-dropdown size="small">
						  <span class="el-dropdown-link">
						    更多<i class="el-icon-arrow-down el-icon--right"></i>
						  </span>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item>查看</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
					</template>
				</el-table-column>
			</el-table>
			<div>
				<el-pagination
					v-if="paginationVisible"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
		      :current-page.sync="pagination.currPage"
		      :page-size="pagination.pageSize"
		      :page-sizes="pagination.pageSizes"
		      layout="sizes, prev, pager, next"
		      :total="pagination.total"
					background>
		    </el-pagination>
			</div>
		</div>
	</div>
</template>


<script>
	import ActionDialog from './components/ActionDialog'
	import DeleteBallon from './components/DeleteBallon'
	import response from './data.json'

	export default {
		name: 'QueryTable',
		components: {
			ActionDialog, DeleteBallon
		},
		data(){
			return {
				expandForm: false,
				form: {
					system: '',
          template: '',
					status: '',
					level: '',
					uid: '',
					merchantId: ''
        },
				table: {
					data: [],
					selection: []
				},
				pagination: {
					pageSize: 30,
					pageSizes: [10, 30, 50],
					total: 100,
					currPage: 1
				}
			}
		},
		computed: {
			isShowExpand () {
				let l = Object.keys(this.form).length

				return l > 3 ? true : false
			},
			expandStyle () {
				return this.expandForm
					? { width: '100%', textAlign: 'right' }
				 	: ''
			},
			paginationVisible () {
				return this.table.data.length > 0
			}
		},
		created () {
			this.getDataByPage(1)
		},
		methods: {
			getDataByPage (page) {
				this.table.data = response.data.list
			},
			handleSearch () {
				this.getDataByPage(1)
				this.pagination.currPage = 1
			},
			resetForm (formName) {
				console.log(1)
				this.$refs[formName].resetFields()
			},
			handleAdd (form) {
				console.log(form)
			},
			handleEdit (form, index) {
				this.$set(this.table.data, index, form)
			},
			handleDelete (index) {
				console.log(index)
			},
			handleTrail (form, index) {
				console.log(index)
			},
			handleSelectionChange (val) {
				this.table.selection = val
			},
			toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
			handleSizeChange (val) {
				this.pagination.pageSize = val
			},
			handleCurrentChange (val) {
				this.getDataByPage(val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cmp-wrapper {
		.form-container {
			margin-bottom: 25px;
			.form-inline {
				.el-form-item {
					display: inline-flex;
					width: (1/3) * 100%;
					padding-right: 16px;
					margin-right: 0;
					/deep/ .el-form-item__content {
						flex: 1;
					}
					.el-input,
					.el-select {
						width: 100%;
					}
					&:nth-child(3n) {
						padding-right: 0;
					}
				}
			}
			.el-button {
				margin-right: 10px;
			}
		}
		.table-container {
			.table-header {
				margin-bottom: 20px;
				overflow: hidden;
				.left {
					float: left;
				}
				.right {
					float: right;
				}
			}
			.table-info {
				padding: 0 10px;
				background-color: #e6f7ff;
				border: 1px solid #91d5ff;
				border-radius: 3px;
				.el-icon-info,
				.num {
					margin-right: 5px;
					color: #1890ff;
				}
			}
			.el-table {
				margin-bottom: 30px;
			}
			.el-pagination {
				text-align: right;
			}
			.el-dropdown-link {
		    cursor: pointer;
		    color: #409EFF;
		  }
		}
	}
</style>
