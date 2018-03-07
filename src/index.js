import Vue from 'vue';
import App from './App.vue'

Vue.config.debug = true;

var app = new Vue({
    el: '#app',
    components: {
        App
    }
});