<template>
<Header />
<router-view />
<Footer />
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@font-face {
    font-family: 'msg-01';
    src:url('./assets/fonts/msg-01-Regular.otf') format('opentype');
    font-weight: 400;
} 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding:0;
  margin:0;
  background-color:#E2E2E2;
}
a{
  color:black;
  text-decoration: none;
}
</style>
