<template>
  <li class="article-item">
    <!-- <a href="javascript:;" class="article-item-avatar">
      <img :src="item.avatar" />
    </a> -->
    <div class="article-content">
      <h4>{{item.title}}</h4>
      <article>{{item.content}}</article>
      <a href="javascript:;" @click="toDetail">More</a>
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
      toDetail(){
        const {username, _id} = this.item
        this.$router.push({path: `${username}/${_id}`})
      }
    }
  }
</script>