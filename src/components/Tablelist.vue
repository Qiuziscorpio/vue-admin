<template>
	<div>
		<el-row type="flex">
			<el-col :span="24">
				<div class="grid-content">
					<el-col :span="3">
						<el-input placeholder="请输入用户名" icon="search" v-model="input1" @click="handleIconClick"  size="small">
						</el-input>
					</el-col>
				</div>
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
	  	}
	  },
		components: {
			Vtable
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

		input.el-input__inner{
			border-radius:5rem ;
			background: #EFF2F7;
		}
</style>