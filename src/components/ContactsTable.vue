<template>
    <div class="container">
        <!--Tabela za kontakte-->
        <table border=3>
            <thead>
                <th>Key</th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <!--ovaj key nam je redni broj za svakog usera; :key="key" je kljuc, tj index-->

                <tr v-for="(contact, index) in contactsList" :key="index">
                    <td>{{index + 1}}</td> <!--index+1 -> da ne krece od 0 nego od 1-->

                    <td>
                        <router-link :to="{name: 'contact-details', params: {id: contact.id}}"> <!--router-link vodi na link koji je definisan u main.js; id smo stavili da znamo koji je kontakt u pitanju-->
                            {{contact.firstName}}
                            {{contact.lastName}}
                        </router-link>
                    </td>
                    
                    <td>{{contact.email}}</td>
                    <td>
                        <!--dugme za brisanje kontakta koje radi na akciju @click="removeContact(contact)"; 
                        ta metoda se nalazi u script tagu, u 'methods' u ContactList.vue-->
                        <button class="btn btn-danger" @click="removeContact(contact)">Remove contact</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    props: ['contactsList']
};
</script>
