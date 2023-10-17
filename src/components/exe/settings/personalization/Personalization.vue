<template>
    <div>
        <!-- Light and dark -->
        <DarkModeSelect></DarkModeSelect>

        <!-- Light and Dark Slider -->
        <BaseLayerSlider></BaseLayerSlider>

        <!-- Blur checkbox -->
        <BlurCheckbox></BlurCheckbox>

        <!-- Theme Colors -->
        <AccentBaseColorPicker></AccentBaseColorPicker>
    </div>
</template>

<script setup lang="ts">
import BlurCheckbox from './BlurCheckbox.vue';
import { AccentBaseColorPicker, BaseLayerSlider, DarkModeSelect } from '@/components/fluent-ui/fluent-components';

</script>

<style scoped>

</style>