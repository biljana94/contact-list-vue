<!-- NASA KONTAKT LISTA -->
<template>
    <div>

        <!--FORMA ZA UNOSENJE KONTAKTA-->
        <!--@submit.prevent - ne reloduje stranicu na klik; ="addContact" - fnc koja nam dodaje kontakt u listu-->
        <form @submit.prevent="addContact">
            <label>First Name</label>
            <input v-model="newContact.firstName" type="text" placeholder="Enter first name"><br>

            <label>Last Name</label>
            <input v-model="newContact.lastName" type="text" placeholder="Enter last name"><br>

            <label>Email</label>
            <input v-model="newContact.email" type="text" placeholder="Enter email"><br>

            <button type="submit">Add contact</button>
        </form>


        <h3>Contact List</h3>


        <table border=3>
            <thead>
                <th>Key</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th></th>
            </thead>
            <tbody>
                <!--ovaj key nam je redni broj za svakog usera; :key="key" je kljuc, tj index-->
                <tr v-for="(contact, index) in contacts" :key="index">
                    <td>{{index + 1}}</td> <!--index+1 -> da ne krece od 0 nego od 1-->
                    <td>{{contact.firstName}}</td>
                    <td>{{contact.lastName}}</td>
                    <td>{{contact.email}}</td>
                    <td>
                        <button @click="removeContact(contact)">Remove contact</button>
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

    methods: {
        addContact() {
            // console.log(this.newContact);
            this.contacts.push(this.newContact); //dodajemo kontakt u niz objekata 'contacts'
            this.newContact = {}; //ocistili smo input polje i postavili da je newContact prazan objekat
        },

        removeContact(contact) {
            // console.log(contact);
            let index = this.contacts.indexOf(contact); //trazimo indexe kontakata
            // console.log(index);
            this.contacts.splice(index, 1); //splice(index, 1) - na toj poziciji(indexa) mi skloni 1
        }
    }
};
</script>
