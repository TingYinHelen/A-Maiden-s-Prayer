import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ArticleList  from '@/components/ArticleList'
import BlogDetail from '@/components/BlogDetail'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect: '/Home'},
    { path: '/Home', name: 'Home', component: Home,
      children: [
        { path: '', redirect: {name: 'ArticleList'}},
        { path: 'ArticleList', name: 'ArticleList', component: ArticleList},
        { path: 'BlogDetail', name: 'BlogDetail', component: BlogDetail},
        { path: 'Create', name: 'Create', component: Create},
      ]
    },
  ]
})
