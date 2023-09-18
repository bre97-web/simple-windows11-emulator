<template>
    <div
        class="relative max-h-screen h-full w-screen brightness nightlight overflow-clip"
        :style="{
            '--system-bright': 100 - system.getSystemBrightness + '%',
            '--system-nightlight-enabled': system.getSystemIsNightlight ? '35%' : '0',
        }"
    >

        <lock-screen v-if="system.getSystemIsLocked"></lock-screen>

        <template v-else>
            <div class="flex-grow h-full max-h-screen overflow-clip">
                <router-view></router-view>
                
                <Desktop></Desktop>
            </div>

            <nav class="fixed bottom-0 left-0 w-full h-12">
                    <StartsBar></StartsBar>
            </nav>
        </template>
        
    </div>
    
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import LockScreen from './components/lock-screen/LockScreen.vue';
import { useUserStore } from './store/UserStore';
import StartsBar from '@/components/starts/StartsBar.vue'
import { useSystemStore } from './store/SystemStore';
import Desktop from './components/desktop/Desktop.vue';

const system = useSystemStore()

const user = useUserStore()

onMounted(() => {
    user.setIsLogout(true)
    system.setIsLocked(true)
})

onUnmounted(() => {
    user.setIsLogout(true)
    system.setIsLocked(true)
})
</script>
