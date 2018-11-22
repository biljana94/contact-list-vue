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


        <h3>Contact List</h3>


        <!--Tabela za kontakte-->
        <table border=3>
            <thead>
                <th>Key</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <!--ovaj key nam je redni broj za svakog usera; :key="key" je kljuc, tj index-->
                <tr v-for="(contact, index) in contacts" :key="index">
                    <td>{{index + 1}}</td> <!--index+1 -> da ne krece od 0 nego od 1-->
                    <td>{{contact.firstName}}</td>
                    <td>{{contact.lastName}}</td>
                    <td>{{contact.email}}</td>
                    <td>
                        <!--dugme za brisanje kontakta koje radi na akciju @click="removeContact(contact)"; 
                        ta metoda se nalazi u script tagu, u 'methods'-->
                        <button class="btn btn-danger" @click="removeContact(contact)">Remove contact</button>
                    </td>
                </tr>
            </tbody>
        </table>


    </div>
    
</template>


<script>
export default {
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
