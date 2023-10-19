<template>
    <div class="space-y-8">
        <FlexLayout class="gap-4">
            <Icon class="relative -top-2">light</Icon>
            <fluent-slider
                @change="setSystemBright"
                id="systemBrightnessSliderRef"
                :value="system.getSystemBrightness"
                min="30"
                max="100"
            ></fluent-slider>
        </FlexLayout>
        <FlexLayout class="gap-4">
            <Icon class="relative -top-2">volume_up</Icon>
            <fluent-slider value="00"></fluent-slider>
        </FlexLayout>
    </div>
</template>

<script setup lang="ts">
import { Slider } from '@fluentui/web-components'
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()

const setSystemBright = (e: Event) => {
    system.setBrightness((e.target as EventTarget & Slider).valueAsNumber)
}
</script>
