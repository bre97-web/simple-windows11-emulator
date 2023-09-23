/**
 * Vue-Router
 */
import Router from '@/router/index'

/**
 * Tailwindcss
 */
import '@/assets/css/tailwind.css'
import '@/assets/css/theme.css'

/**
 * Google's Material Design
 */
import 'material-symbols'
import '@fontsource/roboto'

import { registerGlobalComponents } from '@/scripts/registerGlobalComponents'

/**
 * Pinia
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

/**
 * Windows
 */
import WindowsApp from '@/startup/windows'
registerGlobalComponents(WindowsApp)
WindowsApp.use(pinia).use(Router)
WindowsApp.mount('#window')


/**
 * Screen Brightness and nightlight
 */
import ScreenMaskApp from '@/startup/screen-mask'
ScreenMaskApp.mount('#window-screen-mask')


/**
 * Listenning to 'shutdown' of system settings
*/
import { useSystemStore } from '@/store/SystemStore'
import ShutdownApp from '@/startup/shutdown'
import { watch } from 'vue'
const system = useSystemStore()

watch(() => system.needShutdown, () => {
    WindowsApp.unmount()
    ScreenMaskApp.unmount()
    
    ShutdownApp.mount('#window')
})
watch(() => system.isShutdown, () => {
    if(system.isShutdown) {
        setTimeout(() => {
            document.documentElement.style.backgroundColor = '#000'
            document.body.remove()
            ShutdownApp.unmount()
        }, 500)
    }
})
