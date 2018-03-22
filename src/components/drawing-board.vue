<template>
    <canvas id="canvas" width="500" height="300" style="border: 1px solid #999;"></canvas>
</template>

<script>
export default {
    mounted() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#999';
        ctx.strokeStyle = "#000";
        ctx.fillRect(0, 0, 500, 500);
    }
}
</script>


<style>
    #canvas {
        background: pink;
        cursor: default;
    }
</style>