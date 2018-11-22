<!-- NASA KONTAKT LISTA -->
<template>
    <div class="container">

        <!--FORMA ZA UNOSENJE KONTAKTA-->
        <!--@submit.prevent - ne reloduje stranicu na klik; ="addContact" - fnc koja nam dodaje kontakt u listu-->
        <div class="row justify-content-md-center">
            <form @submit.prevent="addContact">
                <small class="text-muted">Contact Form</small>
                <div class="form-group row">
                    <label>First Name</label>
                    <input v-model="newContact.firstName" class="form-control" type="text" placeholder="Enter first name">
                </div>

                <div class="form-group row">
                    <label>Last Name</label>
                    <input v-model="newContact.lastName" class="form-control" type="text" placeholder="Enter last name">
                </div>

                <div class="form-group row">
                    <label>Email</label>
                    <input v-model="newContact.email" class="form-control" type="text" placeholder="Enter email">
                </div>

                <button type="submit" class="btn btn-primary">Add contact</button>
            </form>
        </div>


        <ContactsTable :contactsList='contacts'/> <!--kontakt table-->



    </div>
    
</template>


<script>

import ContactsTable from './ContactsTable';

export default {

    components: {
        ContactsTable
    },

    //data je fnc koja vraca objekat
    data() {
        return {
            newContact: {
                firstName: '',
                lastName: '',
                email: ''
            },
            contacts: [
                {firstName: 'Saban', lastName:'Saulic', email: 'saban@gmail.com'},
                {firstName: 'Mira', lastName:'Skoric', email: 'mira@gmail.com'},
                {firstName: 'Lepa', lastName:'Lukic', email: 'lepa@gmail.com'},
                {firstName: 'Zorica', lastName:'Brunclik', email: 'zorica@gmail.com'},
                {firstName: 'Ilda', lastName:'Saulic', email: 'ilda@gmail.com'}
            ]
        };
    },

    //metode
    methods: {
        //dodajemo kontakt
        addContact() {
            // console.log(this.newContact);
            this.contacts.push(this.newContact); //dodajemo kontakt u niz objekata 'contacts'
            this.newContact = {}; //ocistili smo input polje i postavili da je newContact prazan objekat
        },

        //brisemo kontakt
        removeContact(contact) {
            // console.log(contact);
            let index = this.contacts.indexOf(contact); //trazimo indexe kontakata
            // console.log(index);
            this.contacts.splice(index, 1); //splice(index, 1) - na toj poziciji(indexa) mi skloni 1 kontakt
        }
    }
};
</script>
