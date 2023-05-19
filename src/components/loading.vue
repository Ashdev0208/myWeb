<script setup>
import { ref } from "vue";
import { route } from "../store/store";
fetch('../reusable/index.js')

    .then(response => {
        setTimeout(() => {
            route().isLoad = false;
        }, 200);
    })


</script>

<template>
    <div v-show="route().isLoad" class="loader">
        <div class="spinner"></div>
        <div class="text">Aems Studios</div>
    </div>
</template>



<style scoped>
.loader {
    background: #746dffcb;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: 30;
    backdrop-filter: blur(10px);
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.2);
    filter: hue-rotate(0);
    border-top-color: #007bff;
    border-radius: 50%;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
    }
}

.text {
    margin-left: 10px;
    font-size: 34px;
    font-weight: bold;
    font-family: "heavy", sans-serif;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
}
</style>