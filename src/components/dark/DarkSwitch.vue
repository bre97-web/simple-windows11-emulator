<template>
    <md-switch :selected="dark.getDark" ref="switchRef" @click="dark.toggleDark()"></md-switch>
</template>

<script setup lang="ts">
import { useDarkStore } from '@/store/DarkStore';
import { onMounted, ref } from 'vue';

const switchRef = ref()
const dark = useDarkStore()

onMounted(() => {
    switchRef.value.selected = dark.isDark()
})
</script>
