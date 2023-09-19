<template>
    <div class="flex p-1 w-full h-full">

        <TabGroup vertical as="div" class="flex w-full h-full">
            <TabList as="fluent-listbox" class="p-0">
                <Tab as="fluent-option" value="processes" selected>Processes</Tab>
                <Tab as="fluent-option" value="details">Details</Tab>
            </TabList>

            <TabPanels as="div" class="bg-white/50 shape-container w-full h-full">
                <TabPanel as="ul" class="p-2">
                    <li
                        v-for="e in process.getAllProcesses"
                        :key="e.instance._component.props['activeZIndex']"
                        class="hover:bg-white/75 px-4 py-2 shape overflow-auto"
                    >
                        <h1>{{ e.instance._component.props['title'] }}</h1>
                    </li>
                </TabPanel>
                
                <TabPanel as="ul" class="p-2">
                    <li
                        v-for="e in process.getAllProcesses"
                        :key="e.instance._component.props['activeZIndex']"
                        class="hover:bg-white/75 px-4 py-2 shape flex gap-2 overflow-auto"
                    >
                        <h1>{{ e.instance._component.props['title'] }}</h1>

                        <fluent-divider class="w-[1px] h-6 bg-black/10"></fluent-divider>

                        <h1>{{ e.instance._component.props['windowState']['value']['activeZIndex'] }}</h1>
                    </li>
                </TabPanel>
            </TabPanels>
        </TabGroup>

    </div>
</template>

<script setup lang="ts">
import { useProcessStore } from '@/store/ProcessStore';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const process = useProcessStore()


</script>

<style scoped>
fluent-listbox,
fluent-option {
    outline: none;
}
</style>