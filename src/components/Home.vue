<template>
  <div class="fairy-container">
    <header>
      <div class="fairy-header">
        <div class="fairy-center">
          <h4>Fairy</h4>
          <section class="">
            <template>
              <a href="javascript:;">Sign in</a>
              <a href="javascript:;">Sign Up</a>
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
    <footer></footer>
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