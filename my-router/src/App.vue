<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br/>
    <router-link to="/single">Go to Single</router-link> ||
    <router-link :to="{name:'foo'}">Go to Foo</router-link> ||
    <router-link to="/bar/123">Go to Bar</router-link>
    <router-view></router-view>
    
    <router-view name="foomore"></router-view>
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
