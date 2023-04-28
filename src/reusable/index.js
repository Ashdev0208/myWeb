
const server = [
    {
        id: 1,
        banner: {
            img: new URL('../assets/banner.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/1914646039083',
            type: ["droma", "kulgili"],
            season: 3,
            partNumber: 14,
            title: 'buyuk shaman go shim',
            movieType: 'serial'
        }
    },
    {
        id: 2,
        banner: {
            img: new URL('../assets/banner2.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/1473817283119',
            type: ["droma", "kulgili"],
            season: 3,
            partNumber: 14,
            title: 'buyuk shaman go shim',
            movieType: 'film'
        }
    },
    {
        id: 3,
        banner: {
            img: new URL('../assets/anime.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/2005864131',
            type: ["droma", "kulgili"],
            partNumber: 1,
            title: 'awesome anime',
            movieType: 'anime'
        }
    },
    {
        id: 4,
        banner: {
            img: new URL('../assets/supergirl.jpg', import.meta.url).href,
            src: '//ok.ru/videoembed/928574474874',
            type: ["droma", "kulgili"],
            season: 1,
            partNumber: 14,
            title: 'supergirl',
            movieType: 'serial'
        }
    }
]


export default server;