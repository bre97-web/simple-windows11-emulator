<template>
    <div class="relative max-h-screen h-screen w-screen">

        <lock-screen v-if="user.activityState.isLocked"></lock-screen>
        <template v-else>
            <div>
                <router-view></router-view>
            </div>

            <nav class="absolute bottom-0 left-0 w-full">
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


const user = useUserStore()

onMounted(() => {
    user.logout()
})

onUnmounted(() => {
    user.logout()
})
</script>
