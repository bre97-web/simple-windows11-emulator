import { defineStore } from "pinia";

export const useSystemStore = defineStore('system_store', {
    state: () => ({
        brightness: 100 as number,
        isNightlight: false,
        isLocked: true,
    }),
    getters: {
        getSystemBrightness: (state) => state.brightness, 
        getSystemIsNightlight: (state) => state.isNightlight,
        getSystemIsLocked: (state) => state.isLocked,
    },
    actions: {
        setBrightness(e: number) {
            this.brightness = e
        },
        setIsNightlight(e: boolean) {
            this.isNightlight = e
        },
        toggleIsNightlight() {
            this.isNightlight = !this.isNightlight
        },
        setIsLocked(e: boolean) {
            this.isLocked = e
        },
    },
    persist: true,
})
