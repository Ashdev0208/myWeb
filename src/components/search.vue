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