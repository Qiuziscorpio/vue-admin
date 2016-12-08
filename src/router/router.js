'use strict'
import tablelist from '../components/Tablelist'
import login from '../components/Login'
import index from '../index'

export default [
	//设置入口  重定向第二层路由视图
	{path: '/', redirect:"/index"},
	//主页
    {path: '/index', component:index, name:"index",
      children: [
        {
          path: '',
          component: tablelist,
          name:"tablelist"
        },    
        //逛逛
        {
          path: 'tablelist',
          component: tablelist,
          name:"tablelist"
        }       
      ]
    } ,  	
	//登录
	{
		path: '/login',
		component: login, 
		name:"login",
		meta: { requiresAuth: true }
	}
]
