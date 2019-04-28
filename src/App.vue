<template>
  <div id="app">
    <router-view style="height: 100%;"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow-y: hidden;

}
</style>
