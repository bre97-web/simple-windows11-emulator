<template>
    <div class="p-4">
        <!-- Light and dark -->

        <fluent-accordion>
            
            <!-- Light Dark Select -->
            <!-- Light and Dark Slider -->
            <fluent-accordion-item ref="chooseYourModeRef">
                <Icon slot="start">dark_mode</Icon>
                <h1 slot="heading">
                    Choose Your Mode
                </h1>
                <div class="flex flex-col items-start gap-4">
                    <DarkModeSelect></DarkModeSelect>
                    <BaseLayerSlider></BaseLayerSlider>
                </div>
            </fluent-accordion-item>

            <!-- Blur checkbox -->
            <fluent-accordion-item>
                <Icon slot="start">blur_on</Icon>
                <h1 slot="heading">
                    Enable Blur Effect
                </h1>
                <div class="flex flex-col items-start gap-4">
                    <BlurCheckbox></BlurCheckbox>
                </div>
            </fluent-accordion-item>

            <!-- Theme Colors -->
            <fluent-accordion-item>
                <Icon slot="start">palette</Icon>
                <h1 slot="heading">
                    Accent Color
                </h1>
                <div class="flex flex-col items-start gap-4">
                    <AccentBaseColorPicker></AccentBaseColorPicker>
                </div>
            </fluent-accordion-item>
        </fluent-accordion>


    </div>
</template>

<script setup lang="tsx">
import BlurCheckbox from './BlurCheckbox.vue';
import { AccentBaseColorPicker, BaseLayerSlider, DarkModeSelect } from '@/components/fluent-ui/fluent-components';

</script>
