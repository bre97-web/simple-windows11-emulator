<template>
    <PageLayout>
        <FlexLayout class="flex-col gap-1 h-full">
            <FlexLayout class="justify-end items-center bg-white/50 w-full p-2 shape-container">
                <KillProcessButton :current-process="currentProcess"></KillProcessButton>
            </FlexLayout>

            <TabGroup as="div" class="flex w-full h-full gap-1">
                <TabList as="fluent-listbox" class="gap-1 transition-all">
                    <Tab as="fluent-option" value="processes" selected>Processes</Tab>
                    <Tab as="fluent-option" value="details">Details</Tab>
                </TabList>

                <TabPanels as="div" class="bg-white/75 shape-container w-full h-full">
                    <TabPanel as="ul" class="p-2 h-full">
                        <ProcessList @set-current-process="setCurrentProcess" :current-process="currentProcess">
                            <template v-slot="{ e }">
                                <h1>{{ e.getProcessStateInstance().window.info.title }}</h1>
                            </template>
                        </ProcessList>
                    </TabPanel>

                    <TabPanel as="ul" class="p-2 h-full">
                        <ProcessList @set-current-process="setCurrentProcess" :current-process="currentProcess">
                            <template v-slot="{ e }">
                                <h1>{{ e.getProcessStateInstance().window.info.title }}</h1>
                                <fluent-divider class="w-[1px] h-6 bg-black/10"></fluent-divider>
                                <h1>{{ e.getProcessStateInstance().process.processId }}</h1>
                            </template>
                        </ProcessList>
                    </TabPanel>
                </TabPanels>
            </TabGroup>

        </FlexLayout>
    </PageLayout>
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
    padding-top: 0;
}
fluent-option {
    margin: 0;
}
</style>
