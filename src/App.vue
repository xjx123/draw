<template>
  <drawing-board v-if='this.player == 1'></drawing-board>
  <showing-board v-if='this.player == 2'></showing-board>
  <button v-if='this.player == 0' @click='draw'>我来画</button>
  <button v-if='this.player == 0' @click='guess'>我来猜</button>
  <button v-if='this.player == 2' @click='replay'>重新开始</button>
</template>

<script>
import Vue from 'vue'


export default {
    data() {
      return {
        player: 0
      }
    },
    components: {
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
        location.reload()
      }
    }
}
</script>

<style lang="less">
body {
  background: #fff;
}
</style>
