<template>
    <canvas id="canvas" width="500" height="300"></canvas>
</template>

<script>
export default {
    mounted() {
        var canvas = document.getElementById('canvas');  
        var ctx = canvas.getContext('2d');  // 返回一个用于在画布上绘图的环境。
        ctx.fillStyle = '#999';
        ctx.strokeStyle = "#000";
        ctx.fillRect(0, 0, 500, 500);
    }
}
</script>


<style>
</style>