<template>
    <div class="relative max-h-screen h-full w-screen overflow-clip">


        <lock-screen v-if="!system.getSystemIsLocked"></lock-screen>

        <template v-else>
            <div class="flex-grow h-full max-h-screen overflow-clip">
                <!-- <router-view></router-view> -->
                <Desktop></Desktop>
            </div>

            <nav class="fixed bottom-0 z-[999] left-0 w-full h-12">
                <StartsBar></StartsBar>
            </nav>
        </template>
        
    </div>
    
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue';
import LockScreen from '@/components/lock-screen/LockScreen.vue';
import { useUserStore } from '@/store/UserStore';
import StartsBar from '@/components/starts/StartsBar.vue'
import Desktop from '@/components/desktop/Desktop.vue';
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()
const user = useUserStore()

onBeforeMount(() => {
    user.setIsLogout(true)
    system.setNeedShutdown(false)
})

onBeforeUnmount(() => {
    user.setIsLogout(true)
})
</script>
