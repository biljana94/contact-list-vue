<template>
    <div class="container">
        <h3>{{title}}</h3>
        <button @click="functionInChild">Call parent function</button><br>
        {{message}} <br>
        {{getReverseMessageMethod()}} <br>

        {{reverseMessageComputed}} <!--POZIVANJE COMPUTED PROPERTI-->
    </div>
</template>


<script>
export default {
    data() {
        return {
            message: 'Ovo je neka poruka'
        }
    },
    props: ['title'],
    methods: {
        functionInChild() {
            console.log('child function');
            this.$emit('callParentFunction', 'Biljana', 24);
        },

        getReverseMessageMethod() {
            return this.message.split(' ').reverse().join(' '); //poruka neka je Ovo
        }
    },

    //kao getter u klasi
    computed: {
        reverseMessageComputed() {
        return this.message
            .split(' ')
            .reverse()
            .join(' ');
        }
    }
    
};
</script>
