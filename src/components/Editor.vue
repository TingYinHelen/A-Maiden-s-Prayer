<template>
  <div class="fairy-article-list">
    <div class="fariy-edit-publish">
      <div class="">
        <el-button @click="isMarked = true">Edit</el-button>
        <el-button @click="checkToView">View</el-button>
      </div>
      <div class="">
        <el-button @click="submitAriticle">Publish</el-button>
      </div>
    </div>
    <el-input class="fairy-editor-title" v-model="contentTitle"></el-input>
    <el-input type="textarea" v-if="isMarked" v-model="mdContent"></el-input>
    <div v-else class="fairy-preview" v-html="mdHtml"></div>
  </div>
</template>
<script>
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
    data(){
      return {
        isMarked: true,
        mdContent: '',
        contentTitle: '',
      }
    },
    computed: {
      mdHtml: {
        get(){
          return marked(this.mdContent, { renderer: renderer })
        }
      }
    },
    methods: {
      checkToView(){
        this.isMarked = false
      },
      submitAriticle(){
        const vm = this
        this.$http.post('/api/createArticle', {
          title: this.contentTitle, 
          content: this.mdContent, 
          username: localStorage.userName})
            .then(res=>{
              if(res.status == 200){
                const username = localStorage.getItem('userName')
                const {articleId} = res.body
                this.$router.push({path: `/${username}/${articleId}`})
              }
            })
      }
    }
  }
</script>
<style lang="less">
  .fariy-edit-publish{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .fairy-article-list{
    .el-textarea{
      height: 500px;
      margin-bottom: 10px;
      textarea{
        display: block;
        height: 100%;
      }
    }
  }
  .fairy-preview{
    border: 1px dashed #F8C6DA;
    height: 500px;
    overflow-y: scroll;
  }
  .hashTitle{
    color: #666;
  }
  .fariy-edit-content{
    color: #666;
    font-size: 14px;
    line-height: 25px;
  }
  .fairy-editor-title{
    margin-bottom: 20px;
  }
</style>