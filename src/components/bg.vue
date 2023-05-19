<template>
    <div class="bg-blur">
        <img :src="datas[val].banner.img" alt="">
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import datas from '../reusable/index.js';
let val = ref(Math.round(Math.random() * datas.length))
watchEffect(() => {
    val.value = Math.round(Math.random() * datas.length);
})
</script>

<style></style>