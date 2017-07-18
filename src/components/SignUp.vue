<template>
  <div class="fariy-sign-container">
    <div class="">
      <h4 @click="backToHome">Sign Up</h4>
      <el-form>
        <div class="">
          <label>username:</label>
          <el-input></el-input>
        </div>
        <div class="">
          <label>password:</label>
          <el-input type="password"></el-input>
        </div>
        <div class="">
          <label>confirm password:</label>
          <el-input type="password"></el-input>
        </div>
        <el-button>Sign In</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default{
    methods: {
      backToHome(){
        this.$router.push('/Home')
      }
    }
  }
</script>