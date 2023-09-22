<template>
    <GridLayout class="relative gap-2 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 items-start">
        <IconButton
            has-hover
            has-active
            @click="openNewWindow(e.slot, e.title, e.icon)" 
            v-for="e in getAppList()"
            :key="e.slot"
            class="h-16 w-24"
        >
            <Icon>{{ e.icon }}</Icon>
            <LabelSmall class="select-none mt-2">{{ e.label }}</LabelSmall>
        </IconButton>

    </GridLayout>
</template>

<script setup lang="ts">
import { getAppList } from '@/scripts/apps'
import { useProcessStore } from '@/store/ProcessStore';

/**
 * Test
 */
const process = useProcessStore()
const openNewWindow = (slot: any, title: string, icon = 'bug_report') => {
    const window = process.createNewProcess({
        title,
        icon
    }, slot)
    window.mount()
}

</script>
