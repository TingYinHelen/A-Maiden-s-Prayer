<template>
  <div @click="toPersonal" class="avatar-container" :style="{width: width+'px', height: width+'px'}">
    <img src="static/images/avatar.png">
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
        this.$router.push('Personal')
      }
    }
  }
</script>
<style lang="less">
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