<template>
    <div class="row">
        <div class="side">
            <sidebar></sidebar>
            <div @click="route().modal = false" class="closeModal">

            </div>
        </div>
        <div class="container">
            <Nav></Nav>
            <Carousel :autoplay="300000" :wrap-around="true" :items-to-show="1.5"
                :breakpoints="CarouselSetting.breakpoints">
                <Slide v-for="(array, slide) in server" :key="slide">
                    <div class="carousel__item">
                        <div class="slideItem rel">

                            <div class="part">
                                <div class="season" v-if="server[slide].banner.season
                                    ">{{ server[slide].banner.season }}<br>season</div>
                                <div class="part-number" v-if="server[slide].banner.partNumber">{{
                                    server[slide].banner.partNumber
                                }}<br>seriya</div>
                            </div>
                            <div class="overflow" @click="redirectToMoviePage(array.id)">
                                <img class="contain imgBlur" :src="server[slide].banner.img" alt="">
                            </div>
                            <div class="movie-title">
                                <div class="title">{{ server[slide].banner.title }}</div>
                                <div class="text">{{ server[slide].banner.movieType }}</div>
                            </div>
                            <button class="btn imgBtn">ko'ramiz</button>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
            <section class="info">
                <div class="row ai-c js-b">
                    <div class="img"><img src="../assets/mainPic.jpg" alt="" class="contain"></div>
                    <div class="text">
                        Aems Studios-Havaskor dublajchilar jamoasi
                    </div>
                </div>
            </section>
            <section v-for="(mainName, id) in length" :key="mainName">
                <div class="title">
                    <h1>{{ mainName }}</h1>
                </div>
                <Carousel :items-to-show="num(lengthItem[id].length)" :breakpoints="CarouselSetting.breakpoints">
                    <Slide v-for="(film, index) in lengthItem[id]" :key="index">
                        <div class="carousel__item">
                            <div class="slideItem rel" @click="redirectToMoviePage(film.id)">
                                <div class="part">
                                    <div class="season" v-show="film.banner.season
                                        ">{{ film.banner.season }}<br>season</div>
                                    <div class="part-number" v-show="film.banner.partNumber">{{
                                        film.banner.partNumber
                                    }}<br>seriya</div>
                                </div>
                                <div class="img overflow "><img class="contain imgBlur" :src="film.banner.img" alt=""></div>
                                <div class="title">{{ film.banner.title }}</div>
                                <button class="btn imgBtn">ko'ramiz</button>
                            </div>
                        </div>

                    </Slide>
                    <Slide :key="id">
                        <div class="carousel__item allMovies">
                            <div class="slideItem rel ">
                                <div class="title">Barchasini ko'rish <br>
                                    ☞
                                </div>
                            </div>
                        </div>

                    </Slide>
                </Carousel>
            </section>
            <br><br>
            <Footer></Footer>

        </div>




    </div>
    <div class="bg-blur">
        <img src="../assets/banner.jpg" alt="">
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";
import server from '../reusable/index.js';
import Nav from "./nav.vue"
import 'vue3-carousel/dist/carousel.css';
import sidebar from './sidebar.vue'
import Footer from './footer.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { route } from "../store/store";
let length = ref(['serial', 'film', "anime", "multfilm"])
let anime = ref([]);
let serial = ref([]);
let film = ref([]);
let cartoon = ref([]);
let directLink = ref([]);
server.forEach(item => {
    directLink.value.push(item.banner.title.replace(/ /g, "-"))
})

const router = useRouter();


function redirectToMoviePage(id) {
    router.push({
        path: `/movie/${id}`,
    });
}

let num = (num) => {
    if (num >= 4) {
        return 4
    } else if (num >= 3) {

    }
    else if (num >= 2) {
        return 2
    } else {
        return 1
    }
}

serial.value = server.filter((a) => {
    if (a.banner.movieType == "serial") {
        return a
    }
})

anime.value = server.filter((a) => {
    if (a.banner.movieType == "anime") {
        return a
    }
})

film.value = server.filter((a) => {
    if (a.banner.movieType == "film") {
        return a
    }
})
cartoon.value = server.filter((a) => {
    if (a.banner.movieType == "cartoon") {
        return a
    }
});

let lengthItem = ref([serial.value, film.value, anime.value, cartoon.value])
let CarouselSetting = ref({
    settings: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    breakpoints: {
        991: {
            // itemsToShow: 1,
            snapAlign: 'center',
        },
        8: {
            itemsToShow: 1,
            snapAlign: "center",
        }
    },
})


</script>

<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;

}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    background: rgb(40 40 40 / 55%);
    backdrop-filter: blur(20px);
    color: #fff;
    padding: 6px;
    scale: 1.3;
    border-radius: 50px;
    outline: 2px solid transparent;
    transition: .2s ease all;
}

.carousel__prev:hover,
.carousel__next:hover {
    color: #fff;
    outline-color: rgb(80 80 80 / 65%);
    outline-offset: 0.5px;
}

.carousel__next--disabled,
.carousel__prev--disabled {
    cursor: default;
    opacity: 0;
}
</style>