<!-- NASA KONTAKT LISTA -->
<template>
    <div>
        <h3>Contact List</h3>

        <table border=3>
            <thead>
                <th>Key</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                <!--ovaj key nam je redni broj za svakog usera; :key="key" je kljuc, tj index-->
                <tr v-for="(contact, index) in contacts" :key="index">
                    <td>{{index + 1}}</td> <!--index+1 -> da ne krece od 0 nego od 1-->
                    <td>{{contact.firstName}}</td>
                    <td>{{contact.lastName}}</td>
                    <td>{{contact.email}}</td>
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
            contacts: [
                {firstName: 'Saban', lastName:'Saulic', email: 'saban@gmail.com'},
                {firstName: 'Mira', lastName:'Skoric', email: 'mira@gmail.com'},
                {firstName: 'Lepa', lastName:'Lukic', email: 'lepa@gmail.com'},
                {firstName: 'Zorica', lastName:'Brunclik', email: 'zorica@gmail.com'},
                {firstName: 'Ilda', lastName:'Saulic', email: 'ilda@gmail.com'}
            ]
        };
    }
};
</script>
