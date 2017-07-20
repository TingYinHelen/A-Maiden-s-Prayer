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
  routes: [
    { path: '/', redirect: 'home', component: Index,
      children: [
        {path: 'home', name: 'home', component: ArticleList},
        {path: 'personal', name: 'personal', component: ArticleList},
        {path: 'blogdetail', name: 'blogdetail', component: BlogDetail},
        {path: 'editor', name: 'editor', component: BlogDetail},
      ]
    },
    //   children: [
    //     { path: '', redirect: {name: 'ArticleList'}},
    //     { path: 'ArticleList', name: 'ArticleList', component: ArticleList},
    //     { path: 'BlogDetail', name: 'BlogDetail', component: BlogDetail},
    //     { path: 'Personal', name: 'Personal', component: ArticleList},
    //     { path: 'Editor', name: 'Editor', component: Editor},
    //   ]
    // },
    { path: '/SignIn', name: 'SignIn', component: SignIn },
    { path: '/SignUp', name: 'SignUp', component: SignUp },
  ]
})
