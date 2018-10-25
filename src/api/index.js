import API from './base.js'

export default {
	load(apiJSON){
		window._api = {...API}
		let apiGroups = Object.keys(apiJSON)
		apiGroups.forEach(group=>{
			let apiConfig = apiJSON[group]
			let allApis = {}
			if(apiConfig){
				if(apiConfig['get']){
					API.makeApiMethod(apiConfig['get'], allApis)
				}
				if(apiConfig['post']){
					API.makeApiMethod(apiConfig['post'], allApis, 'post')
				}
			}
			_api[group] = allApis
		})
	}
}
