<template>
	<div>
		<el-row class="">
		  <el-col :span="3">
		  		<!--左侧菜单-->
		  		<leftnav></leftnav>
		  </el-col>
		  <el-col :span="21" class="bg-purple-white">
			  	<!--右侧内容-->
			  	<div class="grid-content scroll">
				  	<router-view>
				  	</router-view>
			  	</div>
		  </el-col>
		</el-row>		
	</div>
</template>

<script>
	import 'src/assets/css/index.css';
	import 'src/assets/icon/iconfont.css'
	import 	leftnav from  'components/childcomponents/leftNav.vue'
	
	export default {
		name: 'index',
		data() {
			return {}
		},
		components: {
			leftnav
		},
		mounted() {},
		methods: {
		}

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>