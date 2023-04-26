<template>
    <div class="row">
        <div class="side">
            <sidebar></sidebar>
        </div>
        <div class="container">
            <Nav></Nav>
            <Carousel :autoplay="3000" :wrap-around="true" :items-to-show="1.5" :breakpoints="CarouselSetting.breakpoints">
                <Slide v-for="(array, slide) in arr" :key="slide">
                    <div class="carousel__item">
                        <div class="slideItem rel">

                            <div class="part">
                                <div class="season" v-if="datas[slide].banner.season
                                    ">{{ datas[slide].banner.season }}<br>season</div>
                                <div class="part-number" v-if="datas[slide].banner.partNumber">{{
                                    datas[slide].banner.partNumber
                                }}<br>seriya</div>
                            </div>
                            <div class="overflow">
                                <img class="contain imgBlur" :src="array" alt="">
                            </div>
                            <div class="movie-title">
                                <div class="title">{{ datas[slide].banner.title }}</div>
                                <div class="text">{{ datas[slide].banner.movieType }}</div>
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
                <div class="title">
                    <h1>
                        bepul online ko'rish uchun website
                    </h1>
                    <br>
                </div>
                <div class="row ai-c js-b">
                    <div class="img"><img src="../assets/mainPic.jpg" alt="" class="contain"></div>
                    <div class="text">
                        Aems Studios - Men Ovozlashtirayapman ma'nosini anglatuvchi yosh yigit qizlardan iborat bo'lgan, asl
                        dublyajni qayta tiklashni niyat qilgan va o'zbek tilini rivojini istagan jamoa!
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
                            <div class="slideItem rel">
                                <div class="part">
                                    <div class="season" v-show="film.banner.season
                                        ">{{ film.banner.season }}<br>season</div>
                                    <div class="part-number" v-show="film.banner.partNumber">{{
                                        film.banner.partNumber
                                    }}<br>seriya</div>
                                </div>
                                <div class="img overflow "><img class="contain imgBlur" :src="name(film)" alt=""></div>
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
import { ref, onMounted } from "vue"
import datas from '../server/server.json';
import Nav from "./nav.vue"
import 'vue3-carousel/dist/carousel.css';
import sidebar from './sidebar.vue'
import Footer from './footer.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
let length = ref(['serial', 'film', "anime", "multfilm"])
let arr = ref([]);
let anime = ref([]);
let serial = ref([]);
let film = ref([]);
let cartoon = ref([]);
datas.forEach(el => {
    arr.value.push(el.banner.img);
})

let name = (name) => {
    return new URL(name.banner.img, import.meta.url)
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

serial.value = datas.filter((a) => {
    if (a.banner.movieType == "serial") {
        return a
    }
})

anime.value = datas.filter((a) => {
    if (a.banner.movieType == "anime") {
        return a
    }
})

film.value = datas.filter((a) => {
    if (a.banner.movieType == "film") {
        return a
    }
})
cartoon.value = datas.filter((a) => {
    if (a.banner.movieType == "cartoon") {
        return a
    }
});

let lengthItem = ref([serial.value, film.value, anime.value, cartoon.value])

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

let CarouselSetting = ref({
    settings: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
        768: {
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