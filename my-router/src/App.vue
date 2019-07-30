<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br/>
    <router-link to="/foo">Go to Foo</router-link>
    <br/>
    <router-link to="/bar">Go to bar</router-link>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
  name: 'app',
  components: {
    // HelloWorld,
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
