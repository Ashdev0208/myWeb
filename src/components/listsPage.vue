<template>
    <div class="row">
        <div class="side">
            <sidebar></sidebar>
        </div>
        <div class="container">
            <Nav></Nav>


            <div class="row ai-c js-b">
                <div class="pages row ">
                    <div class="title row ai-c" v-for="text in arr">
                        <span class="directory">{{ text }}</span>
                        <span class="text">
                            >
                        </span>
                    </div>
                </div>
                <div class="title">
                    Aems Studios
                </div>
            </div>
            <!-- <section class="content">
                <div class="slideItem rel">
                    <div class="part">
                        <div class="season"><br>season</div>
                        <div class="part-number"><br>seriya</div>
                    </div>
                    <div class="img overflow "><img class="contain imgBlur" src="../assets/anime.jpg" alt=""></div>
                    <div class="title">hello there</div>
                    <button class="btn imgBtn">ko'ramiz</button>
                </div>
                <div class="pagination">
                    <button class="pagination__button btn">
                        1
                    </button>
                </div>
            </section> -->
            <section>
                <Footer></Footer>
            </section>

        </div>
    </div>
    <div class="bg-blur">
        <img :src="random" alt="">
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, onUpdated } from "vue"
import { useRoute } from "vue-router"
import datas from '../reusable/index.js';
import Nav from "./nav.vue"
import sidebar from './sidebar.vue'
import Footer from './footer.vue'
let val = ref(Math.round(Math.random() * datas.length))
let random = ref(new URL(datas[val.value].banner.img, import.meta.url));
let arr = ref(useRoute().fullPath.split('/'));
watchEffect(() => {
    console.log(useRoute());
})
if (arr.value[0] == "") {
    arr.value[0] = "Home"
}

if (arr.value[1] == "lists") {
    arr.value.splice(1, 1);
}
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