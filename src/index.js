import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueX from 'vuex';
import routes from './routes.js';
import createStore from './store/store';


Vue.use(VueRouter)
Vue.use(VueX)

const store = createStore();

const router = new VueRouter({
     routes: routes
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});