<template>
	<div>
		<div class="el-card__body">			
			<!--表格-->
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column :prop="data.prop" :label="data.label" :width="data.width" v-for="data in tablelist ">
				</el-table-column>
				<el-table-column inline-template :context="_self" fixed="right" label="操作" width="120">
				<span>
			        <el-button type="text" size="small">编辑</el-button>
			        <el-button type="text" size="small" >删除</el-button>
		      	</span>
				</el-table-column>
			</el-table>
		</div>
		<el-row type="flex" class="el-card__body" align="middle" justify="end">
			<!--分页-->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
			</el-pagination>
			
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'table',
		data() {
			return {
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4,
			    object1: {
			      	第一: 'John',
			      	第二: 'John',
			    },				
				tablelist:[{
					prop:"date",
					label:"日期",
					width:150
				},{
					prop:"name", 
					label:"姓名", 
					width:120
				},{
					prop:"province", 
					label:"省份", 
					width:120
				},{
					prop:"city", 
					label:"市区", 
					width:120
				},{
					prop:"zip", 
					label:"邮编", 
					width:120
				},{
					prop:"address", 
					label:"地址", 
					width:300
				}],
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}]
			}
		},
		methods: {
			handleClick() {
				console.log(1);
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("//unpkg.com/element-ui/lib/theme-default/index.css");
</style>