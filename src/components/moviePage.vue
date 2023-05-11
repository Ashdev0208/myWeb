<template>
    <div>
        <div class="row">
            <div class="side">
                <sidebar></sidebar>
                <div @click="route().modal = false" class="closeModal">

                </div>
            </div>
            <div class="container">
                <Nav></Nav>
                <section class="aboutForMovie rel">
                    <div class="img movieImg"><img style="cursor: none;pointer-events: none;"
                            :src="moviePageData[0].banner.img" class="" alt=""></div>
                    <div class="row ai-c js-b desc">
                        <div class="movieInfo col-6">
                            <div class="row js-b ai-c">
                                <div class="col-6">Yili</div>
                                <div class="col-6">{{ moviePageData[0].banner.year }}</div>
                                <div class="col-6">Janr</div>
                                <div class="col-6 row ai-c"><span class="tag"
                                        v-for="typeMovie in moviePageData[0].banner.type">{{ typeMovie }}</span></div>
                                <div class="col-6">Tili</div>
                                <div class="col-6">{{ moviePageData[0].banner.language }}</div>
                                <div class="col-6">Davlat</div>
                                <div class="col-6">{{ moviePageData[0].banner.country }}</div>
                            </div>
                        </div>
                        <div class="row ai-c js-b col-6">
                            <div class="title" style="font-weight: 400;margin-bottom: 10px;">film haqida qisqacha malumot:
                            </div>
                            <div class="text">
                                {{ moviePageData[0].banner.description }}
                            </div>
                        </div>
                    </div>
                </section>
                <div style="margin-top: 50px;">
                    <iframe v-if="isOpen" width="100%" height="500" :src="source" frameborder="0"
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
                            v-for="(data, index) in moviePageData[0].banner.part" :class="{ selectedBtn: isClass }"
                            @click="partList(data)" class="btn movieBtn">{{ index + 1 }}-qism</button></div>

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
let source = ref();
let isClass = ref(false)
const partList = ref((id) => {
    source.value = id;
    isOpen.value = true;
    isClass.value = true;
});

let classActive = ref((e) => {
    console.log(event);
})

</script>

<style></style>