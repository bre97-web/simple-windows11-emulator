<template>
    <GridLayout class="grid-cols-3 gap-2 transition-all">
        <NavigationButton icon="wifi"></NavigationButton>
        <NavigationButton icon="bluetooth"></NavigationButton>
        <NavigationButton icon="airplane"></NavigationButton>
        <NightLightNavigationButton></NightLightNavigationButton>
    </GridLayout>
</template>

<script setup lang="ts">
import NavigationButton from '@/components/control/internal/NavigationButton.vue'
import NightLightNavigationButton from '@/components/control/night-light/NightLightNavigationButton.vue'

</script>
