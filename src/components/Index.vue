
<template>
  <div class="fairy-container">
    <header>
      <div class="fairy-header">
        <div class="fairy-center">
          <h4>Fairy</h4>
          <section class="header-right">
            <!-- <template>
              <router-link to="/SignIn">Sign In</router-link>
              <router-link to="/SignUp">Sign Up</router-link>
            </template> -->
            <template>
              <div>
                <Avatar :width="40"></Avatar>
              </div>
              <router-link to="Editor" class="icon-quill"></router-link>
              <!-- <span></span> -->
            </template>
          </section>
        </div>
      </div>
      <nav class="fairy-center fairy-nav">
        <router-link to="/Home">Home</router-link>
      </nav>
      <div class="fairy-nav-bottom"></div>
    </header>
    <router-view></router-view>
    <footer class="fairy-footer"></footer>
  </div>
</template>
<script>
  import Avatar from './Avatar'
  export default{
    components: {
      Avatar
    },
    data(){
      return {
        
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