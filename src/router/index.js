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
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp },
    { path: '/', name: 'Index', component: Index,
      children: [
        { path: '', redirect: 'home'},
        { path: 'home', name: 'home', component: ArticleList},
        { path: 'editor', name: 'editor', component: Editor},
        { path: ':username?', name: 'personal', component: ArticleList},
        // { path: ':article?', name: 'blogarticle', component: BlogDetail},
        { path: ':username?/:article?', name: 'blogdetail', component: BlogDetail},
      ]
    },
  ]
})
