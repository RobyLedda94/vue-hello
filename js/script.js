// struttura base standard per vue js

const { createApp } = Vue;

createApp({
    data(){
        return{
            message: "HELLO VUE",
            copertina:{
                img: './img/poetto.jpg',
                name: 'poetto',
            }
        }
    }
}).mount('#app');