import * as types from '../mutation_types'
import { setMsg } from '../../tool'
import Vue from 'vue'
let localStorage =window.localStorage
let storeBaseInfo = (data) => {
	localStorage.setItem('cnodeBseInfo',JSON.stringify(data))
}
let storeDetailInfo = (data) => {
	localStorage.setItem('cnodeDetailInfo',JSON.stringify(data))
}

//获取存储在localStorage中的数据
exports const getStore = ({dispatch, state})=>{
	if(localStorage.getItem('cnodeBseInfo')){
		let data =JSON.parse(localStorage.getItem('cnodeBseInfo'))
		dispatch(types.SET_BASEINFO,data)
	}
	if(localStorage.getItem('cnodeDetailInfo')){
		let data =JSON.parse(localStorage.getItem('cnodeDetailInfo'))
		dispatch(types,SET_DETAIL,data)
	}
}
//设置基础数据
exports const setBaseInfo = ({dispatch,state},token,callback) =>{
	
}
