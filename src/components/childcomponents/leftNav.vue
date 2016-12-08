<template>
	<div class="grid-content bg-purple" >
		<!--<img src="../../assets/logo.png" width="10">-->
		<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>
			<el-submenu index="1">
				<template slot="title"><i class="el-icon-message"></i>导航一</template>
				<el-menu-item-group title="">
					<el-menu-item route="{ name: 'brand'}" >
						表格
					</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="login">
					<i class="el-icon-menu"></i>导航二
			</el-menu-item>
			<el-menu-item index="3">
					<i class="el-icon-setting"></i>导航三
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: 'listnav',
		data() {
			return {
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>