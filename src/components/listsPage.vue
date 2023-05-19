<template>
    <loading></loading>
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
                        <span class="directory" @click="router.push('/')">bosh sahifa</span>
                        <span class="text">
                            >
                        </span>
                        <span class="directory">{{ route().routeName == 'cartoon' ? 'multfilm' : route().routeName }}</span>
                        <span class="text">
                            >
                        </span>
                    </div>
                </div>
                <div class="title">
                    Aems Studios
                </div>
            </div>
            <section class="content row ai-c js-b">
                <div v-for="(data, index) in paginatedItems" class="slideItem rel listCard" :key="index"
                    @click="redirectToMoviePage(data.id, data.banner.title)">
                    <div class="part">
                        <div class="season" v-if="data.banner.season">{{ data.banner.season }}<br>season</div>
                        <div class="part-number" v-if="data.banner.partNumber">{{ data.banner.partNumber }}<br>seriya</div>
                    </div>
                    <div class="img overflow "><img class="contain imgBlur" :src="data.banner.img" alt=""></div>
                    <div class="title">{{ data.banner.title }}</div>
                    <button class="btn imgBtn">ko'ramiz</button>
                </div>
            </section>
            <br><br>
            <paginate :page-count="pageCounter" :container-class="'pagination'" :prev-text="'<'" :next-text="'>'"
                :click-handler="handlePageChange">
                <span class="pagination__button btn" slot="prevContent">Changed previous button</span>
                <span slot="nextContent">Changed next button</span>
                <span slot="breakViewContent"></span>
            </paginate>
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
import Paginate from 'vuejs-paginate-next';
import { route } from "../store/store.js"
import { ref, watchEffect, computed } from "vue"
import { useRouter } from "vue-router";
import datas from '../reusable/index.js';
import loading from './loading.vue'
import Nav from "./nav.vue"
import sidebar from './sidebar.vue'
import Footer from './footer.vue'
let directLink = ref();
const router = useRouter();
function redirectToMoviePage(id, title) {
    route().isLoad = true;
    directLink.value = title.replace(/ /g, "-");
    setTimeout(() => {
        router.push({
            path: `/movie/${id}/${directLink.value}`
        });
    }, 300);
}

let datasInData = ref(datas.filter(item => {
    if (item.banner.movieType == route().routeName) {
        return item;
    }
}));

let val = ref(Math.round(Math.random() * datas.length))
watchEffect(() => {
    val.value = Math.round(Math.random() * datas.length);
    datasInData.value = datas.filter(item => {
        if (item.banner.movieType == route().routeName) {
            return item
        }
    });
})
const pageSize = 10;
const currentPage = ref(1);

const paginatedItems = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return datasInData.value.slice(startIndex, endIndex);
});

const pageCounter = computed(() => {
    return Math.ceil(datasInData.value.length / pageSize);
});

function handlePageChange(page) {
    currentPage.value = page;
}
</script>

<style>
.pagination {
    display: flex;
    gap: 30px;
    justify-content: center;
}
</style>