import { defineStore } from "pinia";

export const useSystemStore = defineStore('system_store', {
    state: () => ({
        brightness: 100 as number,
        isNightlight: false,
        isLocked: true,
        needShutdown: false,
        isShutdown: false,
        starts: {
            isOpening: false,
        }
    }),
    getters: {
        getSystemBrightness: (state) => state.brightness, 
        getSystemIsNightlight: (state) => state.isNightlight,
        getSystemIsLocked: (state) => state.isLocked,
        getSystemNeedShutdown: (state) => state.needShutdown,
        getSystemIsShutdown: (state) => state.isShutdown,
        getSystemStarts: (state) => state.starts,
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
        setNeedShutdown(e: boolean) {
            this.needShutdown = e
        },
        setIsShutdown(e: boolean) {
            this.isShutdown = e
        },
        setStarts(e: any) {
            this.starts = e
        },
    },
    persist: true,
})
