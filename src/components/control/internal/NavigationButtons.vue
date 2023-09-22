<template>
    <GridLayout class="grid-cols-3 gap-2">
        <IconButton class="px-8 py-4" has-hover has-active>wifi</IconButton>
        <IconButton class="px-8 py-4" has-hover has-active>bluetooth</IconButton>
        <IconButton class="px-8 py-4" has-hover has-active>air</IconButton>
        <NightLightNavigationButton class="px-8 py-4"></NightLightNavigationButton>
    </GridLayout>
</template>

<script setup lang="ts">
import NightLightNavigationButton from '@/components/control/night-light/NightLightNavigationButton.vue'

</script>
