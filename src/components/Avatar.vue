<template>
  <div class="fairy-avatar">
    <div 
      class="avatar-container" 
      :style="{width: width+'px', height: width+'px'}">
      <img src="static/images/avatar.png">
    </div>
    <ul class="fairy-sign-out">
      <li @click="signOut">Sign out</li>
      <li @click="toPersonal">Your profile</li>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'Avatar',
    props: ['width'],
    data(){
      return {
        
      }
    },
    methods: {
      toPersonal(){
        const username = localStorage.getItem('userName')
        this.$router.push(`/${username}`)
      },
      signOut(){
        localStorage.removeItem('userName')
        this.$router.replace('/home')
      }
    }
  }
</script>
<style lang="less">
  .fairy-avatar{
    position: relative;
    .fairy-sign-out{
      display: none;
      position: absolute;
      width: 140px;
      top: 100%;
      left: -50%;
      background: #fff;
      color: #666;
      font-size: 12px;
      border: 1px solid rgba(27,31,35,0.15);
      border-radius: 4px;
      box-shadow: 0 3px 12px rgba(27,31,35,0.15);
      li{
        cursor: pointer;
        padding-left: 10px;
      }
      li:hover{
        background: #F8C6DA;
        color: #fff;
      }
    }
  }
  .fairy-avatar:hover .fairy-sign-out{
    display: block;
  }
  .avatar-container{
    border-radius: 100%;
    overflow: hidden;
    border: 1px solid #EE6FA1;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
    }
    
  }
</style>