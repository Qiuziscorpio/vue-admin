<template>
	<div class="login-bg">
		<div class="login">
			<div class="login-head">
			</div>
			<div class="login-content">
				<el-form  :model="ruleForm2" :rules="rules2" ref="ruleForm2">
					<el-form-item prop="phone"> 
						<el-input v-model.number="ruleForm2.phone" placeholder="请输入手机号码">
							<template slot="prepend"><i class="icon iconfont icon-shouji1"></i></template>
						</el-input>
					</el-form-item>
					<el-form-item  prop="verification">
						<el-col :span="16" >
							<el-input v-model="ruleForm2.verification" placeholder="请输入验证码">
							</el-input>
						</el-col>
						<el-col :span="8">
							<img src="http://image.lxway.com/upload/f/1a/f1a43af2f1affea07407bbae75f24208_thumb.gif" height="22px" width="100%">
						</el-col>
					</el-form-item>
					<el-form-item prop="type">
						<el-checkbox-group v-model="ruleForm2.type">
							<el-checkbox label="自动登录" name="type"></el-checkbox>
							<router-link :to="{name:'login'}" tag="a" class="forget-label">忘记密码？ </router-link>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="handleSubmit2" size="large">登录</el-button>
					</el-form-item>
					<router-link :to="{name:'login'}" tag="div" class="signin-label">注册 > </router-link>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			var checkPhone = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('手机号码不能为空'));
				}
				if(!/^1[3-9]\d{9}$/.test(value)) {
					callback(new Error('请输入有效的手机号码'));
				} else {
					callback();
				}
			};
			var validateCode = (rule, value, callback) => {
				if(value ==='') {
					callback(new Error('请输入验证码'));
				} else {
					callback();
				}
			};
			var automaticLogin = (rule, value, callback) => {
				callback();
			};
			return {
				ruleForm2: {
					phone: '',
					verification: '',
					type: ''
				},
				rules2: {
					phone: [{
						validator:checkPhone,
						trigger: 'blur'
					}],
					verification: [{
						validator: validateCode,
						trigger: 'blur'
					}],
					type: [{
						validator: automaticLogin,
						trigger: 'change',
					}]
				}
			};
		},
		methods: {
			handleReset2() {
				this.$refs.ruleForm2.resetFields();
			},
			handleSubmit2(ev) {
				let _self = this
				_self.$refs.ruleForm2.validate((valid) => {
					if(valid) {
						_self.$http.get('http://rap.taobao.org/mockjsdata/11407/login/user',{'id':_self.phone,'password':_self.verification}).then((response) => {
							console.log(response.data)
						}, (response) => {
					        console.log('出错啦')
				      	})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login-bg {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #1b2e4f;
/*		background-image: url(../assets/img/login-bg.png);
		background-size: cover;
		background-repeat: no-repeat;*/
	}
	
	.login {
		width: 550px;
		display: flex;
		background: #fff;
	}
	
	.login-head,
	.login-content {
		flex: 0 0 50%;
	}
	
	.login-head {
		background: url(../assets/img/login-bg.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
	
	.login-content .el-form {
		padding: 30px;
	}
	
	.forget-label {
		float: right;
		color: #8492A6;
	}
	
	.signin-label {
		text-align: center;
	}
	
	.el-button {
		width: 100%;
	}
</style>