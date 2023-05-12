import { defineStore } from "pinia";

import { useRoute } from "vue-router";

export const route = defineStore("writeRoute", {
    state: () => {
        return {
            routeName: useRoute().params.type,
            modal: false,
            searchItem:""
        }
    }
})