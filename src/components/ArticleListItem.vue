<template>
  <li class="article-item">
    <a href="javascript:;" class="article-item-avatar">
      <img :src="item.avatar" />
    </a>
    <div class="article-content">
      <h4>{{item.title}}</h4>
      <article>{{item.content}}</article>
      <router-link to="BlogDetail">More</router-link>
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
    }
  }
</script>