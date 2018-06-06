<template>
    <div>
        <h1>Hello App!</h1>
        <button @click="changedRule">changed rule</button>
        <Login />
        <p>rule: {{ rule && rule.toString() }}</p>
        <ul>
            <li v-if="rule.indexOf(1) > -1"> 
                <router-link to='/home'>Go to Home</router-link>
            </li>
            <li v-if="rule.indexOf(2) > -1"> 
                <router-link to='/home1'>Go to Home1</router-link>
            </li>
            <li v-if="rule.indexOf(3) > -1"> 
                <router-link to='/home2'>Go to Home2</router-link>
            </li>
            <li v-if="rule.indexOf(4) > -1"> 
                <router-link to='/home3'>Go to Home3</router-link>
            </li>
            <li v-if="rule.indexOf(5) > -1"> 
                <router-link to='/home4'>Go to Home4</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Login from './Login.vue';


export default {
    name: 'App',
    data() {
        return {
            test: 1
        }
    },
    components: {
        Login
    },
    mounted() {
        console.log("mounted props: ", this.props)
    },
    computed: {
        rule() {
            return this.$store.state.rule
        }
    },
    methods: {
        changedRule() {
            this.$store.commit('updateRule', [1, 2, 3, 4])
        }
    }
}
</script>