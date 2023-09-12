<template>
    <md-icon-button ref="switchRef" @click="dark.toggleDark()">
        <md-icon v-if="dark.getDark">light_mode</md-icon>
        <md-icon v-else>dark_mode</md-icon>
    </md-icon-button>
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
