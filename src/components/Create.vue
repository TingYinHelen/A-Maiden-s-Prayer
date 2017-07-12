<template>
  <div class="">
    <el-form>
      <el-form-item label="标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="content"></el-input>
      </el-form-item>
      <el-button @click="submitContent" type="primary">创建</el-button>
    </el-form>
  </div>
</template>
<script>
  export default{
    name: 'Create',
    data(){
      return {
        title: '',
        content: '',
      }
    },
    methods: {
      submitContent(){
        const params = {
          title: this.title,
          content: this.content
        }
        this.$http.post('/api/createArticle', params)
                  .then(res=>{
                    console.log(res)
                  })
      }
    }
  }
</script>