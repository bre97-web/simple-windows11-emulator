import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme_store', {
    state: () => ({
        theme: {
            darkModeEnabled: false,
            darkModeBaseLayerValue: 0,

            swatchColor: {
                r: 0,
                g: 120,
                b: 215,
            },
            
            blurEnabled: true,
        }
    }),
    getters: {
        getTheme: (state) => state.theme,
    },
    actions: {
        setBlurenabled(e: boolean) {
            this.theme.blurEnabled = e
        },
        setIsDarkMode(value: boolean) {
            this.theme.darkModeEnabled = value
        },
        setSwatchColor(r: number, g: number, b: number) {
            this.theme.swatchColor = {
                r,
                g,
                b
            }
        }
    },
    persist: true,
})
