<template>
  <div class="">
    <ul>
      <li v-for="item in articleList">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'ArticleList',
    data(){
      return {
        articleList: []
      }
    },
    created(){
      this.getArticleList()
    },
    methods: {
      getArticleList(){
        this.$http.get('/api/articleList')
            .then(res=>{
              console.log(res)
            })
      }
    }
  }
</script>