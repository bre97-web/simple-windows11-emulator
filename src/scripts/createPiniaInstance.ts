/**
 * Pinia
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const piniaInstance = createPinia()
piniaInstance.use(piniaPluginPersistedstate)
