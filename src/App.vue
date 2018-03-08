<template>
  <button @click='draw'>我来画</button>
</template>

<script>
export default {
    data() {
      return {
        player: 0
      }
    },
    methods: {
      draw() {
        this.player = 1
      },
      guess() {
        this.player = 2
      },
      replay() {
        this.player = 0
      }
    }
}
</script>

