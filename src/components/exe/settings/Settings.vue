<template>
    <PageLayout>

        <fluent-tabs
            orientation="vertical"
            class="min-h-full"
        >
            <fluent-tab
                v-for="(e, index) in settingList"
                :key="index"
                :id="e.label.toLowerCase().replace(' ', '-')"
                class="gap-2 w-full"
            >
                <Icon>{{ e.icon }}</Icon>
                {{ e.label }}
            </fluent-tab>

            
            <fluent-tab-panel id="accountPanel" class="max-h-full h-full">
                <ul class="bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer">
                    <li>1</li>
                </ul>
            </fluent-tab-panel>
            <fluent-tab-panel id="personalizationPanel" class="max-h-full h-full overflow-auto">
                <ul class="bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer">
                    <!-- appearance -->
                    <li>
                        <Personalization></Personalization>
                    </li>
                </ul>
            </fluent-tab-panel>
            <fluent-tab-panel id="gamingPanel" class="max-h-full h-full overflow-auto">
                <ul class="bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer">
                    <li>1</li>
                </ul>
            </fluent-tab-panel>
            <fluent-tab-panel id="windows-updatePanel" class="max-h-full h-full overflow-auto">
                <ul class="bg-white/75 dark:bg-black/75 w-full h-full overflow-auto rounded-layer">
                    <li>1</li>
                </ul>
            </fluent-tab-panel>


        </fluent-tabs>
    </PageLayout>

</template>

<script setup lang="ts">
import Personalization from './personalization/Personalization.vue'

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

</script>

<style scoped>


</style>