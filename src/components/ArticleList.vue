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
        articleList: []
      }
    },
    components: {
      ArticleItem
    },
    created(){
      this.fetchData()
    },
    methods: {
      fetchData(){
        this.$http.get('/api/articleList').then(res=>{
          if(res.status == 200){
            Object.assign(this.$data, res.body)
          }
        })
      }
    }
  }
</script>