import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ArticleList  from '@/components/ArticleList'
import BlogDetail from '@/components/BlogDetail'
import Editor from '@/components/Editor'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect: '/Home'},
    { path: '/Home', name: 'Home', component: Home,
      children: [
        { path: '', redirect: {name: 'ArticleList'}},
        { path: 'ArticleList', name: 'ArticleList', component: ArticleList},
        { path: 'BlogDetail', name: 'BlogDetail', component: BlogDetail},
        { path: 'Personal', name: 'Personal', component: ArticleList},
        { path: 'Editor', name: 'Editor', component: Editor},
      ]
    },
    { path: '/SignIn', name: 'SignIn', component: SignIn },
    { path: '/SignUp', name: 'SignUp', component: SignUp },
  ]
})
