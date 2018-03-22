<template>
    <drawing-board v-if = "this.status == 1"></drawing-board>
    <showing-board v-else-if = "this.status == 2"></showing-board>
    <div v-else-if = "this.status == 0">
        <button @click = "draw">我来画</button>
        <button @click = "guess">我来猜</button>
    </div>
    <button v-else-if="this.status == 2" @click="replay">重新开始</button>
</template>

<script>
import DrawingBoard from './components/drawing-board.vue';
import ShowingBoard from './components/showing-board.vue';

export default {
    data() {
        return {
            status: 0
        }
    },
    components: {
        DrawingBoard,
        ShowingBoard
    },
    methods: {
        draw() {
            this.status = 1;
        },
        guess() {
            this.status = 2;
        },
        replay() {
            this.status = 0;
            location.reload()
        }
    }
}
</script>