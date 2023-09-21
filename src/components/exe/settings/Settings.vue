<template>
    <PageLayout>
        <FlexLayout class="h-full gap-1">
            <TabGroup>
                <TabList as="div" class="setting-list flex flex-col flex-none gap-2">
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

                <TabPanels as="div" class="flex flex-col w-full h-full">
                    <h1 class="text-3xl font-semibold mb-4">{{ currentLabel }}</h1>
                    <div class="bg-white/75 w-full h-full shape-container">
                        <TabPanel>1</TabPanel>
                        <TabPanel>2</TabPanel>
                        <TabPanel>3</TabPanel>
                        <TabPanel>4</TabPanel>
                    </div>
                </TabPanels>
            </TabGroup>
        </FlexLayout>
    </PageLayout>

</template>

<script setup lang="ts">
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
