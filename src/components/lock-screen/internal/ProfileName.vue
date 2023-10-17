<template>
    <p class="drop-shadow-md shadow-black text-4xl text-white">
        {{ user.accountState.name }}
    </p>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/UserStore';

const user = useUserStore()
</script>
