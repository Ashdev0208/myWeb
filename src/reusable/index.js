
const server = [
    {
        id: 1,
        banner: {
            country: "AQSH",
            language: "o'zbek",
            description: `18 yoshli Ga Du Sim oddiy maktab o'quvchisi kabi yashashni xohlaydi, lekin u yovuz ruhlar bilan kurashadigan shaman bo'lish taqdiri bilan tug'ilgan. U jasur va kuchli qiz v yovuz ruhlarga qarshi kurashadi, sirli hodisalarni hal qiladi.
            Na U Su badavlat oilaning katta maktab o'quvchisi, kelishgan va a'lo baholarga o'qiydi. Ga Du Shim hayotida to'satdan paydo bo'lganda, u yovuz ruhlarni ko'rish qobiliyatiga ega bo'ladi.Shundan so'ng ular birgalikda yovuz ruxlarga qarshi kurasha boshlashadi`,
            year: 2021,
            img: 'http://localhost:5173/src/assets/lock.jpg',
            type: ['Horror', 'hayoti', 'fantastika', "mistika"],
            season: 1,
            partNumber: 10,
            title: "buyuk shaman go do shim",
            movieType: 'serial',
            bannerIsActive: 7,
            part: [
                '//ok.ru/videoembed/5940417137229',
                '//ok.ru/videoembed/5941482424909',
                '//ok.ru/videoembed/5941562313293',
                '//ok.ru/videoembed/5941810039373',
                '//ok.ru/videoembed/5941866400333',
                '//ok.ru/videoembed/5941898447437',
                '//ok.ru/videoembed/5942043937357',
                '//ok.ru/videoembed/5942079457869',
                '//ok.ru/videoembed/5942086601293',
                '//ok.ru/videoembed/5942092368461',
            ]
        }
    },

    {
        id: 2,
        banner: {
            country: "Janubiy Koreya ",
            language: "o'zbek",
            description: `Kambag'al oilada o'sgan uchta opa-singil haqida hikoya.  Ular jiddiy voqeaga aralashib, mamlakatdagi eng boy va qudratli oilaga duch kelishadi.
            O In Ju - oilasini moliyaviy jihatdan himoya qilish uchun qo'lidan kelganicha harakat qiladigan katta opa.
            Oh In Kyung o'rtancha singlisi.  U jurnalist.
            O In Xe - kenja singlisi.  Uning farovonligi uchun hamma narsani qiladigan opa-singillar sevgisida cho'miladi.
            Choi Do Il Buyuk Britaniyadagi nufuzli universitetni tamomlagan maslahatchi.  U, shuningdek, Oh In Ju katta voqea sodir bo'lganida uning oldida paydo bo'lgan sirli figuraning asosiy rolini o'ynaydi.`,
            year: 2022,
            img: new URL('../assets/metro.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/5936314649165',
            type: ['detektiv', 'drama', 'drama'],
            season: 1,
            partNumber: 12,
            title: "Kichik Xonimlar",
            movieType: 'serial',
            bannerIsActive: 2,
            part: [
                '//ok.ru/videoembed/5934033996365',
            ]
        }
    },
    {
        id: 3,
        banner: {
            country: "AQSH",
            language: "o'zbek",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat eius nihil nulla reprehenderit magni molestias iste sint sequi accusantium adipisci, at ex inventore labore dolore consequuntur harum officia libero.',
            year: 2022,
            img: new URL('../assets/fanLetter.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/1914646039083',
            type: ['Drama', 'Komediya'],
            season: 1,
            partNumber: 4,
            title: "Muhlis Xati",
            movieType: 'serial',
            bannerIsActive: 3,
            part: [
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1064661158539',
                '//ok.ru/videoembed/1176370547339',
                '//ok.ru/videoembed/1914646039083',
            ]
        }
    },
    {
        id: 4,
        banner: {
            country: "Janubiy koreya",
            language: "o'zbek",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat eius nihil nulla reprehenderit magni molestias iste sint sequi accusantium adipisci, at ex inventore labore dolore consequuntur harum officia libero.',
            year: 2023,
            img: new URL('../assets/lock.jpg', import.meta.url).href,
            src: '/ok.ru/videoembed/5936075508301',
            type: ['Drama', 'Detiktiv'],
            title: "Qulfdan Chiqarilgan",
            movieType: 'film',
            bannerIsActive: 4,
        }
    },
    {
        id: 5,
        banner: {
            country: "AQSH",
            language: "o'zbek",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat eius nihil nulla reprehenderit magni molestias iste sint sequi accusantium adipisci, at ex inventore labore dolore consequuntur harum officia libero.',
            year: 2022,
            img: new URL('../assets/magican2.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/5935166786125',
            type: ['Fantastika', 'Drama', 'Musiqiy'],
            title: "Sehrlangan 2",
            bannerIsActive: 5,
            movieType: 'film'
        }
    },
    {
        id: 6,
        banner: {
            country: "korean",
            language: "o'zbek",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat eius nihil nulla reprehenderit magni molestias iste sint sequi accusantium adipisci, at ex inventore labore dolore consequuntur harum officia libero.',
            year: 2021,
            img: new URL('../assets/mainPic.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/5934495763021',
            type: ['Drama', 'Komediya'],
            title: "ob havo malikasi",
            bannerIsActive: 6,
            movieType: 'anime',
        }
    },

    {
        id: 7,
        banner: {
            country: "AQSH",
            language: "o'zbek",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat eius nihil nulla reprehenderit magni molestias iste sint sequi accusantium adipisci, at ex inventore labore dolore consequuntur harum officia libero.',
            year: 2022,
            img: new URL('../assets/mainPic.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/1914646039083',
            type: ['Drama', 'Komediya'],
            season: 1,
            partNumber: 8,
            title: "Sening Playlisting",
            movieType: 'serial',
            bannerIsActive: 1,
            part: [
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
            ]
        }
    },
    {
        id: 8,
        banner: {
            country: "AQSH",
            language: "o'zbek",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat eius nihil nulla reprehenderit magni molestias iste sint sequi accusantium adipisci, at ex inventore labore dolore consequuntur harum officia libero.',
            year: 2022,
            img: new URL('../assets/metro.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/1914646039083',
            type: ['Komediya', 'Sarguzasht'],
            season: 1,
            partNumber: 8,
            title: "Metro Syorferchilari",
            movieType: 'cartoon',
            part: [
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
                '//ok.ru/videoembed/1914646039083',
            ]
        }
    },
    {
        id: 9,
        banner: {
            country: "AQSH",
            language: "o'zbek",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat eius nihil nulla reprehenderit magni molestias iste sint sequi accusantium adipisci, at ex inventore labore dolore consequuntur harum officia libero.',
            year: 2022,
            img: new URL('../assets/metro.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/5936314649165',
            type: ['Komediya', 'Sarguzasht'],
            season: 1,
            partNumber: 8,
            title: "Kichkina Xo'jayin Rajdestvo Bonusi",
            movieType: 'cartoon',
        }
    },
    {
        id: 10,
        banner: {
            country: "AQSH",
            language: "o'zbek",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat eius nihil nulla reprehenderit magni molestias iste sint sequi accusantium adipisci, at ex inventore labore dolore consequuntur harum officia libero.',
            year: 2022,
            img: new URL('../assets/lock.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/5936347810381',
            type: ['Komediya', 'Sarguzasht'],
            title: "Haqiqiy Hayot",
            movieType: 'film',
        }
    },
    {
        id: 11,
        banner: {
            country: "AQSH",
            language: "o'zbek",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat eius nihil nulla reprehenderit magni molestias iste sint sequi accusantium adipisci, at ex inventore labore dolore consequuntur harum officia libero.',
            year: 2021,
            img: new URL('../assets/lock.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/5936347810381',
            type: ['Komediay', 'Drama', 'Romantik'],
            title: "Unitilmas lahzalar",
            movieType: 'film',
            part: [
                '//ok.ru/videoembed/5940458097229',
                '//ok.ru/videoembed/5940501088845'
            ]
        }
    },

]


export default server;
