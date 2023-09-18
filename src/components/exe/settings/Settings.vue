<template>
    <div class="p-4 w-full h-full">
        <TabGroup vertical as="div" class="flex min-h-full gap-2">
            <TabList as="div" class="setting-list flex flex-col gap-2 w-full max-w-max">
                <Tab
                    v-for="(e, index) in settingList"
                    :key="index" 
                    as="template" 
                    v-slot="{ selected }"
                >
                    <div :data-active="selected" @click="currentLabel = e.label" class="outline-none">
                        <md-icon>{{ e.icon }}</md-icon>
                        {{ e.label }}
                    </div>
                </Tab>
            </TabList>

            <div class="w-full min-h-screen px-8">
                <h1 class="text-3xl font-semibold mb-4">{{ currentLabel }}</h1>
                <TabPanels as="div" class="flex flex-col bg-white w-full h-full shape-container">
                    <TabPanel>1</TabPanel>
                    <TabPanel>2</TabPanel>
                    <TabPanel>3</TabPanel>
                    <TabPanel>4</TabPanel>
                </TabPanels>
            </div>
        </TabGroup>
    </div>
</template>

<script setup lang="tsx">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ref } from 'vue'

const useListItem = (label: string, icon: string) => ({
    label,
    icon
})
const settingList = [
    useListItem('Account', 'person'),
    useListItem('Personalization', 'brush'),
    useListItem('Gaming', 'sports_esports'),
    useListItem('Windows Update', 'update'),
]

const currentLabel = ref('Account')
</script>
