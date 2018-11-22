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

        <ContactDetails :contact="routeContact"/> <!--computed properti-->

    </div>
    
</template>


<script>

import ContactsTable from './ContactsTable';
import ContactDetails from './ContactDetails';

export default {

    components: {
        ContactsTable,
        ContactDetails
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
                {id: 1, firstName: 'Saban', lastName:'Saulic', email: 'saban@gmail.com'},
                {id: 2, firstName: 'Mira', lastName:'Skoric', email: 'mira@gmail.com'},
                {id: 3, firstName: 'Lepa', lastName:'Lukic', email: 'lepa@gmail.com'},
                {id: 4, firstName: 'Zorica', lastName:'Brunclik', email: 'zorica@gmail.com'},
                {id: 5, firstName: 'Ilda', lastName:'Saulic', email: 'ilda@gmail.com'}
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
    },

    //computed properti
    computed: {
        routeContact() {
            //uzimamo kontakt po id
            //na ovaj nacin uvek izvlacimo parametre iz rute (this.$route.params.id)
            let findedContact = this.contacts.find(contact => contact.id == this.$route.params.id);
            console.log(findedContact);
            return findedContact;
        }
    }
};
</script>
