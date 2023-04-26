<template>
    <div class="row">
        <div class="side">
            <sidebar></sidebar>
        </div>
        <div class="container">
            <Nav></Nav>

            <section>
                <Footer></Footer>
            </section>
            {{ useRoute().fullPath }}

        </div>
    </div>
    <div class="bg-blur">
        <img :src="random" alt="">
    </div>
</template>

<script setup>
import { ref, onMounted, watch, reactive } from "vue"
import { useRoute } from "vue-router"
import datas from '../server/server.json';
import Nav from "./nav.vue"
import sidebar from './sidebar.vue'
import Footer from './footer.vue'
let val = ref(Math.round(Math.random() * datas.length));

let random = ref(new URL(datas[val.value].banner.img, import.meta.url));
onMounted(() => {
    const navBar = document.querySelector('.menu .title');
    const sideBar = document.querySelector('.sidebar');

    navBar.addEventListener('click', () => {
        sideBar.classList.add('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target == sideBar) {
            sideBar.classList.remove('active')
        }
    })
})



</script>

<style scoped></style>