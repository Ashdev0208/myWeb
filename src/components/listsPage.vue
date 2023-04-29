<template>
    <div class="row">
        <div class="side">
            <sidebar></sidebar>
            <div @click="route().modal = false" class="closeModal">

            </div>
        </div>
        <div class="container">
            <Nav></Nav>


            <div class="row ai-c js-b">
                <div class="pages row ">
                    <div class="title row ai-c">
                        <span class="directory">home</span>
                        <span class="text">
                            >
                        </span>
                        <span class="directory">{{ route().routeName }}</span>
                        <span class="text">
                            >
                        </span>
                    </div>
                </div>
                <div class="title">
                    Aems Studios
                </div>
            </div>
            <section class="content">
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
            </section>
            <section>
                <Footer></Footer>
            </section>

        </div>
    </div>
    <div class="bg-blur">
        <img :src="datas[val].banner.img" alt="">
    </div>
</template>

<script setup>
import { route } from "../store/store.js"
import { ref, watchEffect } from "vue"
import datas from '../reusable/index.js';
import Nav from "./nav.vue"
import sidebar from './sidebar.vue'
import Footer from './footer.vue'
let val = ref(Math.round(Math.random() * datas.length))
watchEffect(() => {
    console.log(route().routeName);
    val.value = Math.round(Math.random() * datas.length)
})
</script>

<style scoped></style>