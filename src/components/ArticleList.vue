<template>
  <div class="fairy-article-list">
    <ul>
      <article-item v-for="item in articleList" :item="item"></article-item>
    </ul>
  </div>
</template>
<script>
  import ArticleItem from './ArticleListItem'
  import avatar from 'static/images/avatar.png'
  export default{
    data(){
      return {
        articleList: [
          {
            title: 'title', 
            content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I first posted on the site in February of 2008 that unknowingly started a cake pop phenomenon.',
            avatar: 'static/images/avatar.png'
          },
          {
            title: 'title', 
            content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I first posted on the site in February of 2008 that unknowingly started a cake pop phenomenon.',
            avatar: 'static/images/avatar.png'
          },
          {
            title: 'title', 
            content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I first posted on the site in February of 2008 that unknowingly started a cake pop phenomenon.',
            avatar: 'static/images/avatar.png'
          },
        ]
      }
    },
    components: {
      ArticleItem
    },
    created(){
      
      // this.getArticleList()
    },
    methods: {
      // getArticleList(){
      //   this.$http.get('/api/articleList')
      //       .then(res=>{
      //         console.log(res)
      //       })
      // }
    }
  }
</script>