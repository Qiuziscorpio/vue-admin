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
	vuex: {
		getters:{
			accessToken:({userInfo}) => userInfo.accessToken
		}
	}, 
  data(){
  	return {}
  },
	computed: {
	},  
  methods:{
  },
	components: {
		store
	}
}
</script>

<style>

</style>
