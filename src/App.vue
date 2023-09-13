<template>

    <lock-screen v-if="user.activityState.isLocked"></lock-screen>
    <div v-else class="full-screen ">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import LockScreen from './components/lock-screen/LockScreen.vue';
import { useUserStore } from './store/UserStore';


const user = useUserStore()

onMounted(() => {
    user.logout()
})

onUnmounted(() => {
    user.logout()
})
</script>
