import { defineStore } from "pinia";

export const useSystemStore = defineStore('system_store', {
    state: () => ({
        bright: 100 as number,
        nightlight: false,
    }),
    actions: {
        setBright(e: number) {
            this.bright = e
        },
        setNightlight(e: boolean) {
            this.nightlight = e
        },
        toggleNightlight() {
            this.nightlight = !this.nightlight
        }
    },
    persist: true,
})
