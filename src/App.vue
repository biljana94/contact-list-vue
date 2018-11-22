<!--PARENT KOMPONENTA u kojoj se nesto nalazi, i iz ove komponente saljemo drugim komponentama podatke-->

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ContactList /> dodajemo ContactList, da bi nam ispisao -->
    <!-- <BlogPost 
      v-bind:title="parentTitle"
      @callParentFunction="parentFunction"
    /> nova komponenta, preko v-bind saljemo title BlogPosta -->
    <NavBar />
    <router-view></router-view> <!--ovde uzima i menja nase komponente koje smo definisali u rutama-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactList from './components/ContactList.vue' //importujemo komponentu
import BlogPost from './components/BlogPost.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  data() {
    return {
      parentTitle: 'Blog title' //title BlogPosta, BlogPost.vue nam je child komponenta jer njoj saljemo title
    };
  },
  components: {
    HelloWorld,
    ContactList, //navodimo komponentu u listu komponenata, da bi mogli da je koristimo
    BlogPost,
    NavBar
  },

  methods: {
    parentFunction(name, age) {
      console.log('Hi from parent component, ' + name, age);
    }
  },


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
