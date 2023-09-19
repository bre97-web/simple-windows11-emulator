<template>
    <div class="p-1 space-y-1 h-full">
        <div class="bg-white/50 w-full p-4 shape-container">
            <div class="w-full h-full flex justify-end items-center">
                <fluent-button
                    @click="() => {
                        if(currentProcess !== null) {
                            process.killProcess(currentProcess)
                        }
                    }"
                    appearance="neutral"
                >End Process</fluent-button>
            </div>
        </div>

        <div class="flex w-full h-full">
            <TabGroup as="div" class="flex w-full h-full">
                <TabList as="fluent-listbox" class="p-0 m-0 gap-0.5 transition-all">
                    <Tab as="fluent-option" value="processes" selected>Processes</Tab>
                    <Tab as="fluent-option" value="details">Details</Tab>
                </TabList>

                <TabPanels as="div" class="bg-white shape-container w-full h-full">
                    <TabPanel as="ul" class="p-2">
                        <li
                            v-for="e in process.getAllProcesses"
                            :key="e.instance._component.props['activeZIndex']"
                            @click="currentProcess = e"
                            class="transition-all active:bg-white px-4 py-2 shape flex gap-2 overflow-auto"
                            :class="[e === currentProcess ? 'bg-blue-500/25 hover:bg-blue-500/50' : 'hover:bg-white/75']"
                        >
                            <h1>{{ e.instance._component.props['title'] }}</h1>
                        </li>
                    </TabPanel>
                    
                    <TabPanel as="ul" class="p-2">
                        <li
                            v-for="e in process.getAllProcesses"
                            :key="e.instance._component.props['activeZIndex']"
                            @click="currentProcess = e"
                            class="transition-all active:bg-white px-4 py-2 shape flex gap-2 overflow-auto"
                            :class="[e === currentProcess ? 'bg-blue-500/25 hover:bg-blue-500/50' : 'hover:bg-white/75']"
                        >
                            <h1>{{ e.instance._component.props['title'] }}</h1>

                            <fluent-divider class="w-[1px] h-6 bg-black/10"></fluent-divider>

                            <h1>{{ e.instance._component.props['windowState']['value']['activeZIndex'] }}</h1>
                        </li>
                    </TabPanel>
                </TabPanels>
            </TabGroup>

        </div>
    </div>

</template>

<script setup lang="ts">
import { useProcessStore, Process } from '@/store/ProcessStore';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ref } from 'vue';

const process = useProcessStore()

const currentProcess = ref<Process | any>(null)

</script>

<style scoped>
fluent-listbox,
fluent-option {
    outline: none;
}
</style>