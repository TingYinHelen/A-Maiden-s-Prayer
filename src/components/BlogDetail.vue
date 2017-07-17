<template>
  <div class="fairy-article-detail">
    <div class="fairy-article-date">July 17, 2017</div>
    <div class="fairy-article-content">
      <h4>MEOW</h4>
      <article class="">
        How cute are these cushy kitties! How cute are these cushy kitties! How cute are these cushy kitties! How cute are these cushy kitties!How cute are these cushy kitties!
        <img src="static/images/avatar.png">
      </article>
    </div>
    <div class="fairy-comment">
      <h4>Leave a Comment</h4>
      <el-form class="commemt-form">
        <div class="">
          <Avatar :width="50"></Avatar>
          <el-input type="textarea"></el-input>
        </div>
        <el-button>Post</el-button>
      </el-form>  
    </div>
  </div>
</template>
<script>
  import Avatar from './Avatar'
  export default{
    components: {
      Avatar,
    }
  }
</script>
<style lang="less">
  .fairy-comment{
    h4{
      color: #EE6FA1;
    }
  }
  .commemt-form>div{
    display: flex;
    margin-top: 20px;
    .el-textarea{
      margin-left: 10px;
    }
  }
</style>