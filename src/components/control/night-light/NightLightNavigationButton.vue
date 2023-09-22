<template>
    <IconButton
        has-hover
        has-active
        @click="system.toggleIsNightlight"
        :class="{'bg-primary-500': system.getSystemIsNightlight}"
    >light</IconButton>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()
</script>
