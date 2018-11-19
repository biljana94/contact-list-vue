<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ContactList /> <!-- dodajemo ContactList, da bi nam ispisao -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactList from './components/ContactList.vue' //importujemo komponentu

export default {
  name: 'app',
  components: {
    HelloWorld,
    ContactList //navodimo komponentu u listu komponenata, da bi mogli da je koristimo
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
