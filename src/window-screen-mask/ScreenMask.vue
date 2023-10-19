<template>
    <!-- Global Screen Effects -->
    <div class="brightness" :style="{'--system-bright': 100 - system.getSystemBrightness + '%'}"></div>
    <div class="nightlight" :style="{'--system-nightlight-enabled': system.getSystemIsNightlight ? '35%' : '0',}"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()

onMounted(() => {
    system.setIsLocked(true)
})

onUnmounted(() => {
    system.setIsLocked(true)
})
</script>
