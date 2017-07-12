<template>
  <div>
    Home
    <div class="">
      <router-link to="ArticleList">回到首页</router-link>
      <router-link to="Create">新建文章</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    
  }
</script>