<template>
    <div class="space-y-8">
        <FlexLayout class="gap-4">
            <md-icon class="relative -top-2">light</md-icon>
            <fluent-slider
                @change="setSystemBright"
                :value="system.bright"
                min="30"
                max="100"
            ></fluent-slider>
        </FlexLayout>
        <FlexLayout class="gap-4">
            <md-icon class="relative -top-2">volume_up</md-icon>
            <fluent-slider value="00"></fluent-slider>
        </FlexLayout>
    </div>
</template>

<script setup lang="ts">
import { Slider } from '@fluentui/web-components'
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()

const setSystemBright = (e: Event) => {
    system.setBright((e.target as EventTarget & Slider).valueAsNumber)
}
</script>
