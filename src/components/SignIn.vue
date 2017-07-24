<template>
  <div class="fariy-sign-container">
    <div class="">
      <h4 @click="backToHome">Sign in to Fairy</h4>
      <el-form>
        <div class="">
          <label>username:</label>
          <el-input v-model="signInUsername"></el-input>
        </div>
        <div class="">
          <label>password:</label>
          <el-input type="password" v-model="signInPassword"></el-input>
        </div>
        <el-button @click="submitSignIn">Sign In</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        signInUsername: '',
        signInPassword: '',
      }
    },
    methods: {
      backToHome(){
        this.$router.push('home')
      },
      submitSignIn(){
        this.$http.post('/api/signin', {username: this.signInUsername, password: this.signInPassword})
          .then(res=>{
            const {status} = res
            if(status == 200){
              localStorage.setItem('userName', res.body.username)
              this.$router.push({
                path: res.body.username,
                name: 'home',
                params: { username: res.body.username}})
            }else{
              console.error('密码错误')
            }
          })
      }
    }
  }
</script>
<style lang="less">
</style>