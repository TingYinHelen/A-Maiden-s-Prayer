
<template>
  <div class="fairy-container">
    <header>
      <div class="fairy-header">
        <div class="fairy-center">
          <h4>Fairy</h4>
          <section class="header-right">
            <template v-if="username">
              <div>
                <Avatar :width="40"></Avatar>
              </div>
              <router-link to="/editor" class="icon-quill"></router-link>
            </template>
            <template v-else>
              <router-link to="/signin">Sign In</router-link>
              <router-link to="/signup">Sign Up</router-link>
            </template>
          </section>
        </div>
      </div>
      <nav class="fairy-center fairy-nav">
        <router-link to="/home">Home</router-link>
      </nav>
      <div class="fairy-nav-bottom"></div>
    </header>
    <router-view></router-view>
    <footer class="fairy-footer"></footer>
  </div>
</template>
<script>
  import Avatar from './Avatar'
  import { mapState } from 'vuex'
  export default{
    components: {
      Avatar
    },
    data(){
      return {
        userName: window.localStorage.getItem('userName')
      }
    },
    computed: {
      username(){
        return this.$store.state.username
      }
    }
    
  }
</script>
<style lang="less">
  .header-right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-quill{
      margin-left: 20px;
    }
  }
</style>