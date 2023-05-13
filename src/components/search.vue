<template>
    <div>
        <loading></loading>
        <div class="row">
            <div class="side">
                <sidebar></sidebar>
                <div @click="route().modal = false" class="closeModal">

                </div>
            </div>
            <div class="container">
                <Nav></Nav>
                <div class="pages row ">
                    <div class="title row ai-c">
                        <span class="directory">home</span>
                        <span class="text">
                            >
                        </span>
                        <span class="directory">Search</span>
                        <span class="text">
                            >
                        </span>
                    </div>
                </div>
                <div class="findMovie">
                    <input type="text" v-model="route().searchItem" placeholder="search movie">
                    <button class="icon">🔎</button>
                </div>
                <section class="search-item row ai-c js-b">
                    <div v-for="data in searchItemData" class="slideItem rel listCard" :key="data"
                        @click="redirectToMoviePage(data.id)">
                        <div class="part">
                            <div class="season" v-if="data.banner.season
                                ">{{ data.banner.season }}<br>season</div>
                            <div class="part-number" v-if="data.banner.partNumber">{{
                                data.banner.partNumber
                            }}<br>seriya</div>
                        </div>
                        <div class="img overflow "><img class="contain imgBlur" :src="data.banner.img" alt=""></div>
                        <div class="title">{{ data.banner.title }}</div>
                        <button class="btn imgBtn">ko'ramiz</button>
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
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import loading from './loading.vue'
import Nav from "./nav.vue"
import sidebar from "./sidebar.vue"
import Footer from "./footer.vue"
import datas from "../reusable/index.js"
import { route } from "../store/store.js";
import { useRouter } from 'vue-router'
let router = useRouter();
let val = ref(Math.round(Math.random() * datas.length));
let searchItemData = ref(datas.filter(item => {
    if (route().searchItem !== "") {
        let fullName = ref(item.banner.title.toLowerCase()); // `item.banner.title` ni kichik harflarga o'zgartiramiz
        let searchQuery = ref(route().searchItem.toLowerCase()); // `searchItem` ni kichik harflarga o'zgartiramiz

        return fullName.value.includes(searchQuery.value);
    } // O'xshash ma'lumotlarni filtrlash
}));
watchEffect(() => {
    val.value = Math.round(Math.random() * datas.length);
    searchItemData.value = datas.filter(item => {
        if (route().searchItem !== "") {
            let fullName = ref(item.banner.title.toLowerCase()); // `item.banner.title` ni kichik harflarga o'zgartiramiz
            let searchQuery = ref(route().searchItem.toLowerCase()); // `searchItem` ni kichik harflarga o'zgartiramiz

            return fullName.value.includes(searchQuery.value);
        } // O'xshash ma'lumotlarni filtrlash
    })
})

function redirectToMoviePage(id) {
    router.push({
        path: `/movie/${id}`,
    });
    route().searchItem = ""
}

</script>

<style scoped>
.findMovie {
    width: 100%;
    margin-top: 20px;
}

.findMovie input {
    width: 100%;
}

.icon {
    right: 1%;
}
</style>

<!-- svgs  -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><linearGradient id="a" x1="31.928" x2="31.928" y1="62.859" y2="9.892" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a125f"></stop><stop offset=".205" stop-color="#423795"></stop><stop offset=".681" stop-color="#ed1a58"></stop><stop offset="1" stop-color="#54c2ef"></stop></linearGradient><path fill="url(#a)" d="M36.022 36.547a1 1 0 0 1 .526-.525l22.522-9.653L4.787 4.787 26.369 59.07zM10.778 10.778a1 1 0 0 1 1.414 0l21.213 21.213a1 1 0 1 1-1.414 1.414L10.778 12.192a1 1 0 0 1 0-1.414z" data-name="Layer 37" data-original="url(#a)" class=""></path></g></svg> -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><linearGradient id="a" x1="11.992" x2="11.992" y1="22.192" y2="1.803" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8835c5"></stop><stop offset="1" stop-color="#dc80eb"></stop></linearGradient><path fill="url(#a)" d="m21.606 10.789-7.437 3.38-3.38 7.437a1 1 0 0 1-1.844-.055L1.875 3.166a1.007 1.007 0 0 1 1.292-1.291l18.385 7.07a1.006 1.006 0 0 1 .054 1.844z" data-original="url(#a)"></path></g></svg> -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><linearGradient id="a" x1="16.2" x2="16.2" y1="2.493" y2="28.788" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd4685"></stop><stop offset="1" stop-color="#ff9d8c"></stop></linearGradient><path fill="url(#a)" d="M27.438 11.05 6.274 3.725a2 2 0 0 0-2.55 2.55l7.325 21.163a1.975 1.975 0 0 0 1.887 1.35h.038a1.95 1.95 0 0 0 1.875-1.4l2.95-9.575 9.575-2.963a1.975 1.975 0 0 0 1.413-1.875 1.987 1.987 0 0 0-1.35-1.925z" data-original="url(#a)" class=""></path></g></svg> -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m431.494 336.488-330-331.977c-4.199-4.499-10.499-5.7-16.199-3.3s-9.3 7.8-9.3 13.801v481.977c0 6 3.6 11.4 9.3 13.799 5.4 2.401 12.001 1.201 16.199-3.3l145.801-145.499h173.699c6 0 11.4-3.6 13.801-9.3 2.399-5.7 1.199-12-3.301-16.201z" style="" fill="#537983" data-original="#537983" class=""></path><path d="m247.295 361.989-145.801 145.5c-4.199 4.501-10.8 5.7-16.199 3.3-5.7-2.399-9.3-7.798-9.3-13.799V15.012c0-6 3.6-11.4 9.3-13.801l162 360.778z" style="" fill="#3e5959" data-original="#3e5959" class=""></path></g></svg> -->