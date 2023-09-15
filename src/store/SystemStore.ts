import { defineStore } from "pinia";

export const useSystemStore = defineStore('system_store', {
    state: () => ({
        bright: 100 as number
    }),
    actions: {
        setBright(e: number) {
            this.bright = e
        }
    },
    persist: true,
})
