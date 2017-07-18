<template>
  <div class="fairy-container">
    <header>
      <div class="fairy-header">
        <div class="fairy-center">
          <h4>Fairy</h4>
          <section class="">
            <template>
              <router-link to="/SignIn">Sign In</router-link>
              <router-link to="/SignUp">Sign Up</router-link>
            </template>
            <!-- <template>
              <div class="avatar"></div>
              <span class="icon-quill"></span>
            </template> -->
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
  export default{
    data(){
      return {
        
      }
    }
  }
</script>