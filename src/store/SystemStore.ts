import { defineStore } from "pinia";

export const useSystemStore = defineStore('system_store', {
    state: () => ({
        bright: 100
    }),
    actions: {
        setBright(e: number) {
            this.bright = e
        }
    },
    persist: true,
})
