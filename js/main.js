// import { createApp } from 'vue';

const { createApp } = Vue;

createApp({
  data(){
    return {
        title: 'Sono il titolo della pagina 2',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    }
  }
}).mount('#app');

