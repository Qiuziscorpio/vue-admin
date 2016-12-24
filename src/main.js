// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Resource from 'vue-resource'
import Router from 'vue-router'
import RouterMap from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Router)
Vue.use(Resource)
Vue.use(ElementUI)

/* eslint-disable no-new */
const router = new Router({
  mode: 'history',
  routes: RouterMap
})


router.beforeEach(({meta,path},from,next) =>{
	var {auth = true} =meta;
	var isLogin=Boolean(store.state.login.token) //true用已登录    false用户未登陆
	
	if(auth && !isLogin && path !=='/login'){
		return next({ path: '/login'})
	}
	if(isLogin && (path == 'login' || path == '/reg')){
		return next({path: '/index'})
	}
	next()
})


new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});
