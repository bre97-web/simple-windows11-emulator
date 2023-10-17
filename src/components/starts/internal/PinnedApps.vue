<template>
    <GridLayout class="relative gap-2 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 items-start">
        <IconButton
            has-hover
            has-active
            @click="() => {
                emits('closeStartsMenu')
                createNewWindow(e.slot, e.title, e.icon)
            }"
            v-for="e in getAppList()"
            :key="e.slot"
            class="h-16 w-24"
        >
            <Icon>{{ e.icon }}</Icon>
            <p class="text-rb select-none mt-2 overflow-clip text-ellipsis whitespace-nowrap text-center">{{ e.label }}</p>
        </IconButton>

    </GridLayout>
</template>

<script setup lang="ts">
import { getAppList } from '@/scripts/apps'
import { createNewWindow } from '@/scripts/apps';

const emits = defineEmits<{
    (event: 'closeStartsMenu'): void
}>()

</script>
