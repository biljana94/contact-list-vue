import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'; //importujemo vue router biblioteku
import ContactList from './components/ContactList.vue'; //importujemo komponentu ContactList.vue
import AddContact from './components/AddContact.vue';
import ContactDetails from './components/ContactDetails.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter); //ovde koristimo vuerouter biblioteku

//konstanta za nase rute, tu cemo da ih pisemo, SVE VEZANO ZA RUTE PISEMO OVDE(ako je veci projekat onda u poseban fajl pisemo rute)
const routes = [
  {path: '/', redirect: '/contacts'}, //redirektovanje
  {path: '/contacts', component: ContactList}, //ruta /contacts ide na komponentu ContactList.vue
  {path: '/add-contact', component: AddContact},
  {path: '/contact/:id', component: ContactList, name: 'contact-details'} //gadjamo rutu po name u ContactsTable
];

//instanca VueRouter i stavljamo u nju konstantu router
const router = new VueRouter({
  routes
});

new Vue({
  router, //prosledjujemo router instanci Vue
  render: h => h(App),
}).$mount('#app')
