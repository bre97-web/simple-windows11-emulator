<template>
    <GridLayout class="relative gap-2 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 items-start">
        <ScalingButton
            @click="() => {
                emits('closeStartsMenu')
                createNewWindow(e.slot, e.title, e.icon)
            }"
            v-for="e in getAppList()"
            :key="e.slot"
            class="h-16 w-24"
            direction="vertical"
        >
            <Icon>{{ e.icon }}</Icon>
            <p class="text-rm-1 select-none overflow-clip text-ellipsis whitespace-nowrap">{{ e.label }}</p>
        </ScalingButton>

    </GridLayout>
</template>

<script setup lang="ts">
import { getAppList } from '@/scripts/apps'
import { createNewWindow } from '@/scripts/apps';

const emits = defineEmits<{
    (event: 'closeStartsMenu'): void
}>()

</script>
