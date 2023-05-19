<template>
    <div>
        <loading></loading>
        <nav class="row ai-c js-b">
            <div class="logo">
                <routerLink to="/">Aems Studios</routerLink>
            </div>
            <div class="findMovie">
                <input type="text" v-model="route().searchItem" @keydown="searchInput()" placeholder="search movie">
                <button class="icon" @click="pushRoute(), iconTrue = true">🔎</button>
            </div>
            <div class="menu">
                <div @click="route().modal = true" class="title">Menu</div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { route } from '../store/store';
import { useRouter } from 'vue-router';
import loading from './loading.vue'
let router = useRouter();
const searchInput = () => {
    if (event.keyCode == 13) {
        route().isLoad = true;
        setTimeout(() => {
            router.push({ name: 'search' })
        }, 300);
        route().routeName = 'multiSearch'
    }
}
const pushRoute = () => {
    route().isLoad = true;
    setTimeout(() => {
        router.push({ name: 'search' })
    }, 300);
    route().routeName = 'multiSearch'
}

window.scrollBy({ top: 0 });


</script>

<style>
nav {
    padding: 20px 0;
    width: 100%;
}

.logo a {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
}

.findMovie {
    width: 50%;
    position: relative;
}

.icon {
    position: absolute;
    right: 12%;
    top: 50%;
    transform: translate(0%, -50%);
    background: none;
    border: none;
    outline: none;
    font-size: 20px;
}

.findMovie input {
    width: 90%;
    padding: 10px 20px;
    border-radius: 10px;
    background: rgb(80 80 80 / 25%);
    color: #dfdfdf;
    outline: 2.5px solid transparent;
    border: none;
    transition: .6s ease all;
}

.findMovie input:hover {
    outline-color: rgb(80 80 80 / 65%);
}

.findMovie input:focus {
    outline-offset: 2px;
    outline-color: rgb(80 80 80 / 65%);
}

.menu {
    cursor: pointer;
}
</style>