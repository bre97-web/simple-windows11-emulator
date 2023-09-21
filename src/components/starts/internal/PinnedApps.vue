<template>
    <GridLayout class="relative gap-1 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 pt-2 items-center">
        <div class="app shape relative">
            <md-ripple></md-ripple>

            <div @click="openNewWindow('Settings Demo', Settings)" class="w-full h-full active:scale-75 transition-all">
                <FlexLayout class="flex-col items-center justify-around pt-2">
                    <div class="h-8">
                        <md-icon>settings</md-icon>
                    </div>
                    <LabelSmall class="select-none">Settings</LabelSmall>
                </FlexLayout>
            </div>
        </div>

        <div class="app shape relative">
            <md-ripple></md-ripple>

            <div @click="openNewWindow('Task Manager', Manager)" class="w-full h-full active:scale-75 transition-all">
                <FlexLayout class="flex-col items-center justify-around pt-2">
                    <div class="h-8">
                        <md-icon>developer_board</md-icon>
                    </div>
                    <LabelSmall class="select-none">Manager</LabelSmall>
                </FlexLayout>
            </div>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
    </GridLayout>
</template>

<script setup lang="ts">
import Settings from '@/components/exe/settings/Settings.vue'
import Manager from '@/components/exe/manager/Manager.vue'
import { useProcessStore } from '@/store/ProcessStore';

/**
 * Test
 */
const process = useProcessStore()
const openNewWindow = (title: string, slot: any) => {
    const window = process.createNewProcess(title, slot)
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
