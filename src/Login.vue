<template>
    <button @click="login">Login</button>
</template>

<script>
export default {
  methods:{
      login(){
          this.$store.commit('updateRule', [3,4,5])
      }
  }
}
</script>

