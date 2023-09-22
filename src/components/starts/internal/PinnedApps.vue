<template>
    <GridLayout class="relative gap-1 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 pt-2 items-start">
        <div
            v-for="e in getAppList()"
            :key="e.slot"
            @click="openNewWindow(e.slot, e.title, e.icon)" 
            class="app shape relative"
        >
            <md-ripple></md-ripple>

            <div class="w-full h-full active:scale-75 transition-all">
                <FlexLayout class="flex-col items-center justify-around pt-2">
                    <div class="h-8">
                        <md-icon>{{ e.icon }}</md-icon>
                    </div>
                    <LabelSmall class="select-none">{{ e.label }}</LabelSmall>
                </FlexLayout>
            </div>
        </div>

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

<style scoped>

.app {
    /* width: 3.5rem; */
    height: 4.5rem;
    aspect-ratio: 1.125 / 1;
}
</style>
