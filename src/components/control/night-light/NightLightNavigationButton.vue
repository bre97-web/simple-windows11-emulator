<template>
    <NavigationButton
        @click="system.toggleIsNightlight"
        icon="light"
        :class="{'bg-blue-500/75': system.getSystemIsNightlight}"
    ></NavigationButton>
</template>

<script setup lang="ts">
import NavigationButton from '@/components/control/internal/NavigationButton.vue'
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()
</script>
