<template>
    <NavigationButton
        @click="system.toggleIsNightlight"
        icon="light"
    ></NavigationButton>
</template>

<script setup lang="ts">
import NavigationButton from '@/components/control/NavigationButton.vue'
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()
</script>
