import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import BasicNotFound from '@/components/basic-not-found'

// 一下部分是由 Iceworks 相关工具自动生成的路由，请勿随意改变，否则可能会出现一些异常情况
// <!-- auto generated routes start -->
import HeaderLeftMainLayout from './layouts/HeaderLeftMainLayout';
import Home from './pages/Home';
import About from './pages/About';

const autoGeneratedRoutes = [
  {
    path: '/',
    childRoutes: [],
    component: HeaderLeftMainLayout,
    indexRoute: {
      component: Home,
    },
  },
  {
    path: '/about',
    childRoutes: [],
    component: HeaderLeftMainLayout,
    indexRoute: {
      component: About,
    },
  },
];

// <!-- auto generated routes end -->

// 将 Iceworks 当前支持的标准 routes 配置转成支持 vue-router 的格式
function vueRoutesAdapter(routeConfig) {
  const routes = [];
  routeConfig.forEach((route) => {
    let currentPath = route.path;
    // vue router 需要 path 第一个为 /
    if (currentPath[0] !== '/') {
      currentPath = `/${currentPath}`;
    }
    const tempRoute = {
      path: currentPath,
      component: route.component,
      children: [],
    };
    if (route.childRoutes && route.childRoutes.length) {
      tempRoute.children = vueRoutesAdapter(route.childRoutes);
    }
    if (route.indexRoute) {
      tempRoute.children.unshift({
        path: '',
        component: route.indexRoute.component,
      });
    }
    routes.push(tempRoute);
  });

  return {
    routes,
  };
}

const finalRoutes = vueRoutesAdapter(autoGeneratedRoutes);

// 自定义路由，如果 path 相同则会覆盖自动生成部分的路由配置
let isShowDemo = true
let demoRoutes = []
if(isShowDemo) {
  let demoRouterConfig = require('./config/router.json')
  demoRouterConfig['pages'].forEach(page=>{
    demoRoutes.push({
      path: page['path'],
      component: HeaderLeftMainLayout,
      children: [{
        path: '',
        component: () => import(`.${page['component']}`)
        // component: () => import(`.${page['path']}/index.js`)
      }]
    })
  })
}

const customRoutes = {
  routes: [
    ...demoRoutes,
    {
      path: '*',
      component: HeaderLeftMainLayout,
      children: [{
        path: '',
        component: BasicNotFound
      }]
    }
  ],
};

let favLayout = localStorage.getItem('fav-layout')
if(favLayout) {
  [...customRoutes.routes, ...finalRoutes.routes, ...customRoutes.routes].forEach(route=>{
    route['component'] = ()=>import(`./layouts/${favLayout}`)
  })
}

export default new Router({
  ...customRoutes,
  routes: [...finalRoutes.routes, ...customRoutes.routes],
});
