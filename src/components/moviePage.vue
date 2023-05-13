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
                        <span class="directory">{{ moviePageData[0].banner.movieType }}</span>
                        <span class="text">
                            >
                        </span>
                        <span class="directory">{{ moviePageData[0].banner.title }}</span>
                    </div>
                </div>
                <section class="aboutForMovie rel row ai-c js-b">
                    <div class="img movieImg"><img :src="moviePageData[0].banner.img"
                            :style="{ objectPosition: moviePageData[0].banner.x + '%' }" class="" alt=""></div>
                    <div class="desc">
                        <div class="movieInfo ">
                            <div class="row js-b ai-c">
                                <div class="col-6">Yili</div>
                                <div class="col-6">{{ moviePageData[0].banner.year }}</div>
                                <div class="col-6">Janr</div>
                                <div class="col-6 row ai-c" style="align-items: center;justify-content: center;"><span
                                        class="tag" v-for="typeMovie in moviePageData[0].banner.type">{{ typeMovie }}</span>
                                </div>
                                <div class="col-6">Tili</div>
                                <div class="col-6">{{ moviePageData[0].banner.language }}</div>
                                <div class="col-6">Davlat</div>

                                <div class="col-6">{{ moviePageData[0].banner.country }}</div>
                            </div>
                        </div>
                        <br><br>
                        <div class="row">
                            <div class="title" style="font-weight: 400;margin-bottom: 10px;">film haqida qisqacha malumot:
                            </div>
                            <div class="text">
                                {{ moviePageData[0].banner.description }}
                            </div>
                        </div>
                    </div>
                </section>
                <div style="margin-top: 50px;">
                    <iframe v-if="isOpen" width="100%" height="500"
                        :src="source == '' ? moviePageData[0].banner.src : source" frameborder="0"
                        style="border-radius: 10px" allowfullscreen>
                    </iframe>
                    <div class="row ai-c js-b" style="margin-top: 20px;">
                        <div class="title">
                            <h3>{{ moviePageData[0].banner.title }}</h3>
                        </div>
                        <div class="title">
                            <h3>Aems Studios</h3>
                        </div>
                    </div>
                    <div class="row js-b" style="align-items: center;"><button style="margin-top: 20px;"
                            v-for="(data, index) in moviePageData[0].banner.part" :class="{ selectedBtn: isClass == index }"
                            @click="partList(data, index)" class="btn movieBtn">{{ index + 1 }}-qism</button></div>
                </div>

                <section>
                    <Footer></Footer>
                </section>

            </div>
        </div>
        <div class="bg-blur">
            <img :src="moviePageData[0].banner.img" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import loading from './loading.vue'
import Nav from "./nav.vue"
import sidebar from "./sidebar.vue"
import Footer from "./footer.vue"
import datas from "../reusable/index.js"
import { route } from "../store/store.js"
let moviePageData = ref(datas.filter(item => {
    if (item.id == useRoute().params.id) {
        return item
    }
}));

let isOpen = ref(false)
let source = ref('');
let isClass = ref()
if (moviePageData.value[0].banner.part) {
    isOpen.value = false
} else {
    isOpen.value = true
}
const partList = ref((val, id) => {
    source.value = val;
    isOpen.value = true;
    isClass.value = id;
});


</script>

<style>

</style>