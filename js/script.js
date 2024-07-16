// struttura base standard per vue js

const { createApp } = Vue;

createApp({
    data(){
        return{
            message: "HELLO VUE"
        }
    }
}).mount('#app');