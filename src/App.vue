<template>
  <div id="app">
			<router-view></router-view>
	</div>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  name: 'app',
  data(){
  	return {}
  },
	computed: {
	},  
  methods:{
  	vuex: {
  		getters:{
  			accessToken:({userInfo}) => userInfo.accessToken
  		}
  	}
  },
	components: {
		store
	}
}
</script>

<style>

</style>
