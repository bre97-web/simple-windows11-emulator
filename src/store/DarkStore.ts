import { defineStore } from "pinia";

export const useDarkStore = defineStore('dark_store', {
    state: () => ({
        dark: false
    }),
    getters: {
        getDark: (state) => state.dark,
    },
    actions: {
        isDark(): boolean {
            return this.dark
        },
        setDark(e: boolean) {
            this.dark = e
            this.syncDarkToHtmlClass()
        },
        toggleDark() {
            this.dark = !this.dark
            this.syncDarkToHtmlClass()
        },
        syncDarkToHtmlClass() {
            document.documentElement.classList[this.dark ? 'add' : 'remove']('dark')
        },
    },
    persist: true,
})

/**
 * Run it while vue is mounted.
 */
export const initDarkToHtmlClass = () => {
    useDarkStore().syncDarkToHtmlClass()
}
