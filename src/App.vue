<template>
    <button v-if="this.status == 0"  @click="draw">我来画</button>
    <button v-else-if="this.status == 0" @click="guess">我来猜</button>
    <button v-else-if="this.status == 2" @click="clear">重新开始</button>
</template>

<script>
export default {
    data() {
        return {
            status: 0
        }
    },
    methods: {
        draw() {
            console.log("status: ", this.status);
            this.status = 1;
        },
        guess() {
            console.log("status: ", this.status);
            this.status = 2;
        },
        clear() {
            this.status = 0;
            console.log("status: ", this.status);
            location.reload()
        }
    }
}
</script>