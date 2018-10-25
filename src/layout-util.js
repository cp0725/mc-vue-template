export function getPageRouterList(asideMenuConfig, routerPath){
	let pageRouterList = []
	let walkMenus = (menus, index)=>{
		for(let i=0; i<menus.length; i++) {
			let menu = menus[i]
			pageRouterList[index] = menu
			let currentRouterList = pageRouterList.slice(0, index + 1)
			let path = currentRouterList.map(router=>router.path).join('')
			if(path == routerPath){
				pageRouterList = currentRouterList
				return true;
			}
			if(walkMenus(menu['children'] || [], index + 1)){
				return true
			}
		}
	}
	walkMenus(asideMenuConfig, 0)

	return pageRouterList;
}

export function getRootMenus(asideMenuConfig){
	return asideMenuConfig.map((topMenuItem, index)=>{
		let newTopMenuItem = {
			path: topMenuItem['path'],
			name: topMenuItem['name'],
			icon: topMenuItem['icon'] || 'el-icon-menu'
		}
		let getFirstChildPath = items=>{
			let firstPath = ''
			for(let i=0; i<items.length; i++){
				let item = items[i]
				if(item['path']){
					firstPath = item['path']
					break;
				}
				if(item['children']){
					firstPath = getFirstChildPath(item['children'])
				}
			}
			return firstPath
		}
		if(!newTopMenuItem['path']){
			newTopMenuItem['path'] = getFirstChildPath(topMenuItem['children'] || [])
		}
		return newTopMenuItem
	})
}

export function getRootMenuIndexByRouterPath(asideMenuConfig, routerPath){
	let findMenuTopIndex = (items)=>{
		let rootMenuIndex = -1
		for(let i=0; i<items.length; i++){
			let item = items[i]
			if(item['path'] == routerPath ||
				(item['path'] && routerPath.indexOf(item['path'] + '/') === 0)
			){
				rootMenuIndex = i
				break
			} else {
       	if(!item['path'] && item['children']){
          rootMenuIndex = findMenuTopIndex(item['children'] || [])
          if(rootMenuIndex != -1){
            rootMenuIndex = i
            break;
          }
        }
      }
		}
		return rootMenuIndex
	}
	let rootMenuIndex = findMenuTopIndex(asideMenuConfig)
	//if(rootMenuIndex == -1){
	// 	rootMenuIndex = 0
	// }
	return rootMenuIndex
}
