<template>
  <div class="fairy-article-detail">
    <div class="fairy-article-date">July 17, 2017</div>
    <div class="fairy-article-content">
      <h4>{{title}}</h4>
      <article v-html="mdHtml"></article>
    </div>
    <div class="fairy-comment">
      <h4>Leave a Comment</h4>
      <el-form class="commemt-form">
        <div class="">
          <Avatar :width="50"></Avatar>
          <el-input type="textarea" placeholder="Comment..."></el-input>
        </div>
        <el-row type="flex" justify="end">
          <el-col :span="2">
            <el-button>Post</el-button>
          </el-col>
        </el-row>
      </el-form>
      <!-- <comment-list></comment-list> -->
      <ul class="fairy-reply-list">
        <li>
          <Avatar :width="50"></Avatar>
          <section class="fairy-comment-list">
            <header>
              <h4>Helen</h4>
              <span>July 17 2017</span>
              <el-button @click="showComment = true">Reply</el-button>
            </header>
            <div class="fairy-comment-content">
              This is a beautiful website. Helen is so beautiful~~~~
            </div>
            <ul class="fairy-subreply">
              <li>
                <header>
                  <h4>glowd</h4>
                  <span>July 17 2017</span>
                  <el-button @click="showComment = true">Reply</el-button>
                </header>
                <div class="fairy-comment-content">
                  You are damn right !
                </div>
              </li>
              <li>
                <header>
                  <h4>glowd</h4>
                  <span>July 17 2017</span>
                  <el-button @click="showComment = true">Reply</el-button>
                </header>
                <div class="fairy-comment-content">
                  You are damn right !
                </div>
              </li>
            </ul>
            <el-form class="clearfix" v-if="showComment">
              <el-input type="text" placeholder="Comment..."></el-input>
              <el-button>Post</el-button>
            </el-form>  
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Avatar from './Avatar'
  import CommentList from './CommentList'
  import marked from 'marked'
  import hljs from 'highlight.js'
  
  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    },
    sanitize: true
  })
  //自定义markdown样式
  const renderer = new marked.Renderer()
  renderer.heading = function (text, level) {
      return `<h${level} class="hashTitle">${text}</h${level}>`
  }
  renderer.paragraph = text => {
    return `<p class="fariy-edit-content">${text}</p>`
  }
  
  export default{
    components: {
      Avatar,
      CommentList
    },
    data(){
      return {
        showComment: false,
        title: '',
        content: '',
      }
    },
    computed: {
      mdHtml: {
        get(){
          return marked(this.content, { renderer: renderer })
        }
      }
    },
    created(){
      this.fetchData()
    },
    methods: {
      fetchData(){
        const articleId = this.$route.params.article
        this.$http.get(`/api/findArticle?articleId=${articleId}`)
                  .then(res=>{
                    if(res.status == 200){
                      Object.assign(this.$data, res.body)
                    }else{
                      console.error('返回出错')
                    }
                  })
      }
    }
  }
</script>
<style lang="less">
  .fairy-comment{
    margin-top: 20px;
    h4{
      color: #EE6FA1;
    }
  }
  .commemt-form{
    margin-bottom: 20px;
    >div{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .el-textarea{
        width: 620px;
      }
    }
    .el-button{
      padding: 7px 15px;
      background: #EE6FA1;
      color: #fff;
      border: 0;
    }
    
  }
  .fairy-reply-list{
    border: 1px dashed #F8C6DA;
    padding: 15px;
    h4{
      color: #666;
      font-size: 14px;
    }
    .el-button{
      border: 1px solid #ccc;
      background: #fff;
      color: #666;
    }
    >li{
      display: flex;
      justify-content: space-between;
      .fairy-comment-list{
        width: 595px;
        header{
          display: flex;
          margin-bottom: 15px;
          span{
            margin: 0 15px;
            color: #CCC;
            font-size: 10px;
            vertical-align: middle;
          }
          .el-button{
            padding: 2px 7px;
          }
        }
        .fairy-comment-content{
          color: #666;
          font-size: 12px;
          margin-bottom: 20px;
        }
        .el-form .el-button{
          float: right;
          margin-top: 15px;
          padding: 7px 15px;
          background: #EE6FA1;
          color: #fff;
          border: 0;
        }
      }
    }
    .fairy-subreply{
      background: #FDF0F6;
      padding: 15px;
      margin-bottom: 20px;
    }
  }
</style>