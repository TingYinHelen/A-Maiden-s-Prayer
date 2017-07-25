<template>
  <li class="article-item">
    <!-- <a href="javascript:;" class="article-item-avatar">
      <img :src="item.avatar" />
    </a> -->
    <div class="article-content">
      <h4>{{item.title}}</h4>
      <article>{{item.content}}</article>
      <a href="javascript:;" @click="toDetail(item._id)">More</a>
      <!-- :to="{path: item.title, params: {article: item.title}}" -->
    </div>
  </li>
</template>
<script>
  export default{
    name: 'ArticleItem',
    props: {
      item: Object
    },
    data(){
      return {
      }
    },
    methods: {
      toDetail(article){
        const username = this.$route.params.username
        if(username){
          this.$router.push({path:`${username}/${article}`, params: {username, article}})
        }else{
          this.$router.push({path:article, params: {article}})
        }
      }
    }
  }
</script>