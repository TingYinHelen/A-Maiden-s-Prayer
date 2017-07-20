<template>
  <div class="fariy-sign-container">
    <div class="">
      <h4 @click="backToHome">Sign Up</h4>
      <el-form>
        <div class="">
          <label>username:</label>
          <el-input v-model="username"></el-input>
        </div>
        <div class="">
          <label>password:</label>
          <el-input type="password" v-model="password"></el-input>
        </div>
        <div class="">
          <label>confirm password:</label>
          <el-input type="password" v-model="confirmPassword"></el-input>
        </div>
        <el-button @click="submit">Sign In</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        username: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      backToHome(){
        this.$router.push('/Home')
      },
      submit(){
        if(this.username == ''){
          this.$message('Please input username!')
          return
        }else if(this.password == ''){
          this.$message('Please input password!')
          return
        }else if(this.password != this.confirmPassword){
          this.$message('twice password is diffirent!')
          return
        }else{
          this.$http.post('/api/signup', {username: this.username, password: this.password})
            .then(res=>{
              const {status} = res
              status == 200 && this.$router.push('SignIn')
            })
        }
      }
    }
  }
</script>