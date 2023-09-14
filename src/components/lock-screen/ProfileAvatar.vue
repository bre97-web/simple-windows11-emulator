<template>
    <div class="avatar-panel bg-red-500 text-white flex-none font-semibold text-8xl grid place-content-center">
        {{user.accountState.name[0] }}
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/UserStore';

const user = useUserStore()
</script>

<style scoped>

</style>