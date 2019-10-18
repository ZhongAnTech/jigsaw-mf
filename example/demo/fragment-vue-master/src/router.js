import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Notify';


Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default function getRouter(base) {
  console.log('9999999999999999999999999999999999')
  console.log(base)
  return new Router({
    mode: 'history',
    base,
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/insure',
        name: 'insure',
        component: () => import('@/pages/Insure')
      },
      {
        path: '/outOrder',
        name: 'outOrder',
        component: () => import('@/pages/outOrder')
      },
    ]
  })
}