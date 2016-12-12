<template>
	<div>
		<el-row type="flex" class="el-card_head" align="middle" justify="end">
			<el-col :span="3">
				<el-input placeholder="请输入用户名" icon="search" v-model="input1" @click="handleIconClick"  size="small">
				</el-input>
			</el-col>
		</el-row>
		<Vtable></Vtable>
	</div>
</template>

<script>
	import Vtable from "components/childcomponents/Table.vue"
	export default {
		name: 'tablelist',
		data() {
			return {
				input1:""
			}
		},
	  methods:{
	  	handleIconClick(){
	  		console.log("pp")
	  	}
	  },
		components: {
			Vtable
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

		input.el-input__inner{
			border-radius:5rem ;
			background: #EFF2F7;
		}
		.el-card_head{
			padding: 12px;
			border-bottom: 1px solid #EFF2F7;
		}
</style>