// struttura base standard per vue js

const { createApp } = Vue;

createApp({
    data(){
        return{
            message: "Hello Vue"
        }
    }
}).mount('#app');