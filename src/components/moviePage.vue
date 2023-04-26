<template>
    <div>
        <h1>hello worlds</h1>

        <iframe width="100%" height="315" :src="datas[0].src" frameborder="0" allow="autoplay" allowfullscreen>
        </iframe>
    </div>
</template>

<script setup>
import datas from '../server/server.json';
</script>

<style scoped></style>