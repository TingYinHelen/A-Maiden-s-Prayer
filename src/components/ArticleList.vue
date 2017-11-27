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
    watch: {
      '$route'(val){
        const username = this.$route.params ? this.$route.params.username : ''
        this.fetchData(username)
      }
    },
    methods: {
      fetchData(username = ''){
        this.$http.get(`/api/articleList?username=${username}`).then(res=>{
          if(res.status == 200){
            Object.assign(this.$data, res.body)
          }
        })
      }
    }
  }
</script>