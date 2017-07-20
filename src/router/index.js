import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ArticleList  from '@/components/ArticleList'
import BlogDetail from '@/components/BlogDetail'
import Editor from '@/components/Editor'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Index', redirect: {name: 'home'}, component: Index,
      children: [
        { path: 'home', name: 'home', component: ArticleList},
        { path: 'blogdetail', name: 'blogdetail', component: BlogDetail },
        { path: 'personal/:userId?/:articleId?', name: 'personal', component: ArticleList, children: [
          { path: 'editor', name: 'editor', component: Editor },
        ]},
        // {path: 'personal', name: 'personal', component: ArticleList},
      ]
    },
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp },
  ]
})
