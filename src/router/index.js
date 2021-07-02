import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Classify from '@/components/classify'
import My from '@/components/my'
import ProductDetail from '@/components/productDetail'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
  ]
})
