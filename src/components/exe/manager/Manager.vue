<template>
    <div class="p-1 space-y-1 h-full">
        <div class="bg-white/50 w-full p-4 shape-container">
            <div class="w-full h-full flex justify-end items-center">
                <KillProcessButton :current-process="currentProcess"></KillProcessButton>
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
                        <ProcessList
                            @set-current-process="setCurrentProcess"
                            :current-process="currentProcess"
                        >
                            <template v-slot="{ e }">
                                <h1>{{ e.getProcessStateInstance().window.info.title }}</h1>
                            </template>
                        </ProcessList>
                    </TabPanel>
                    
                    <TabPanel as="ul" class="p-2">
                        <ProcessList
                            @set-current-process="setCurrentProcess"
                            :current-process="currentProcess"
                        >
                            <template v-slot="{ e }">
                                <h1>{{ e.getProcessStateInstance().window.info.title }}</h1>
                                <fluent-divider class="w-[1px] h-6 bg-black/10"></fluent-divider>
                                <h1>{{ e.getProcessStateInstance().process.processId }}</h1>
                            </template>
                        </ProcessList>
                    </TabPanel>
                </TabPanels>
            </TabGroup>

        </div>
    </div>

</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ref } from 'vue';
import KillProcessButton from './internal/KillProcessButton.vue';
import ProcessList from './internal/ProcessList.vue';
import { Process } from '@/hooks/useWindow';

const currentProcess = ref(null)
const setCurrentProcess = (e: Process) => {
    currentProcess.value = e
}
</script>

<style scoped>

fluent-listbox,
fluent-option {
    outline: none;
}

</style>
