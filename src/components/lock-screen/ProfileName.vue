<template>
    <div class="drop-shadow-md shadow-black text-4xl text-black/25">
        {{ user.accountState.name }}
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/UserStore';

const user = useUserStore()
</script>
