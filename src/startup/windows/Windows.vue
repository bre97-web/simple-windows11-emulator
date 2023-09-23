<template>
    <div class="relative max-h-screen h-full w-screen overflow-clip">


        <lock-screen v-if="!system.getSystemIsLocked"></lock-screen>

        <template v-else>
            <div class="flex-grow h-full max-h-screen overflow-clip">
                <!-- <router-view></router-view> -->
                <Desktop></Desktop>
            </div>

            <nav
                class="fixed bottom-0 left-0 w-full h-12"
                :style="{
                    zIndex: system.getSystemStarts.isOpening ? '99999' : '999',
                }"
            >
                <StartsBar></StartsBar>
            </nav>
        </template>
        
    </div>
    
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';
import LockScreen from '@/components/lock-screen/LockScreen.vue';
import { useUserStore } from '@/store/UserStore';
import StartsBar from '@/components/starts/StartsBar.vue'
import Desktop from '@/components/desktop/Desktop.vue';
import { useSystemStore } from '@/store/SystemStore';
import { useProcessStore } from '@/store/ProcessStore';

const process = useProcessStore()
const system = useSystemStore()
const user = useUserStore()

onBeforeMount(() => {
    user.setIsLogout(true)
    system.setIsShutdown(false)
    system.setNeedShutdown(false)
    system.setStarts({
        ...system.getSystemStarts,
        isOpenning: false
    })
})

onBeforeUnmount(() => {
    user.setIsLogout(true)
})

var keys: string[] = []
const minimizeAllApps = (e: KeyboardEvent) => {
    if (keys.length === 0) {
        keys[0] = e.code
        return
    } else if (keys.length === 1) {
        keys[1] = e.code
    } else if (e.code !== keys[1]) {
        keys.shift()
        keys[1] = e.code
    }

    if (!['ShiftLeft', 'ShiftRight'].includes(keys[0])) return

    if (keys[1] === 'KeyD') {
        process.setAllProcessMinimize()
    }
    keys = []
}

onMounted(() => {
    document.addEventListener('keydown', minimizeAllApps)
})
onUnmounted(() => {
    document.removeEventListener('keydown', minimizeAllApps)
})
</script>
