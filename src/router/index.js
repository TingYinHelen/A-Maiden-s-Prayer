import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ArticleList  from '@/components/ArticleList'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '', redirect: '/'},
    { path: '/', name: 'Home', component: Home,
      children: [
        { path: '', redirect: {name: 'ArticleList'}},
        { path: 'ArticleList', name: 'ArticleList', component: ArticleList},
        { path: 'Create', name: 'Create', component: Create},
      ]
    },
  ]
})
