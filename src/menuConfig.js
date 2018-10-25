// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const asideMenuConfig = [];

let isShowDemo = true
let myAsideMenuConfig = asideMenuConfig
if(isShowDemo) {
  let demoMenuConfig = require('./config/menu.json')
  myAsideMenuConfig = asideMenuConfig.concat(demoMenuConfig['menus'])
}

export { headerMenuConfig, myAsideMenuConfig as asideMenuConfig  };