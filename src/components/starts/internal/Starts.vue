<template>
    <ExpandLayout class="relative flex items-center justify-center h-full aspect-square">
                
        <!-- Open the starts panel -->
        <template v-slot:actions="{ isExpanded, setIsExpanded}">
            <StartsButton
                @set-is-expanded="setIsExpanded"
                :is-expanded="isExpanded"
            ></StartsButton>
        </template>

        <!-- the Starts Panel -->
        <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">

            <div
                class="start-panel full-screen fixed top-0 left-0 grid justify-center items-end pb-14 px-2 transition-all"
                :class="[isExpanded ? 'active' : 'inactive']"
            >

                <fluent-card class="relative backdrop-blur-lg bg-white/80 dark:bg-black/80 bottom-0 w-screen mx-auto max-w-2xl overflow-auto max-h-[32rem]">
                    
                    <!-- Here -->
                    <div class="start-panel-content-aera">
                        <Search class="px-8 pt-8 row-span-1"></Search>
                        
                        <!-- Content and List in here -->
                        <FlexLayout
                            class="w-full flex-col px-8 gap-4 overflow-auto"
                            style="grid-row: span 10 / span 10;"
                        >
                            <TablePanel class="w-full relative overflow-x-clip">
                                <template v-slot:app-one="{ currentPage, setCurrentPage }">
                                    <div class="w-full absolute top-0 space-y-2 table-transition" :class="[currentPage !== 'page-one' ? '-left-[200%]' : 'left-0']">
                                        <FlexLayout class="justify-between items-center px-4">
                                            <h1 class="text-rp-1">Pinned</h1>
                                            <ApplicationListButton
                                                @click="setCurrentPage('page-two')"
                                                class="self-end"    
                                                label="All Apps"
                                                icon="arrow_forward"
                                            ></ApplicationListButton>
                                        </FlexLayout>
                                        <PinnedApps @close-starts-menu="setIsExpanded(false)"></PinnedApps>
                                    </div>
                                </template>
                                <template v-slot:app-two="{ currentPage, setCurrentPage }">
                                    <div class="w-full absolute top-0 space-y-2 table-transition" :class="[currentPage !== 'page-two' ? 'left-[200%]' : 'left-0']">
                                        <FlexLayout class="justify-between items-center px-4">
                                            <h1 class="text-rp-1">All Apps</h1>
                                            <ApplicationListButton
                                                @click="setCurrentPage('page-one')" 
                                                label="Back"
                                                icon="arrow_back"
                                            ></ApplicationListButton>
                                        </FlexLayout>
                                        <ApplicationList @close-starts-menu="setIsExpanded(false)"></ApplicationList>
                                    </div>
                                </template>
                            </TablePanel>
                        </FlexLayout>
                        
                        <!-- Account and shutdown button -->
                        <FlexLayout class="row-span-1 justify-between items-center bg-black/5 px-8 py-2 border-t">
                            <SimpleUserProfile></SimpleUserProfile>
                            <ShutdownMenu></ShutdownMenu>
                        </FlexLayout>
                    </div>

                </fluent-card>

                <!-- z-index set need near relative or fixed -->
                <div
                    @click="() => {
                        system.setStarts({
                            ...system.getSystemStarts,
                            isOpening: !isExpanded
                        })
                        setIsExpanded(false)
                    }"
                    class="fixed left-0 bottom-0 w-screen h-screen -z-[1]"
                    v-show="isExpanded"
                ></div>
            </div>
        </template>
    </ExpandLayout>
</template>

<script setup lang="ts">
import Search from './Search.vue';
import PinnedApps from './PinnedApps.vue';
import SimpleUserProfile from './SimpleUserProfile.vue';
import ShutdownMenu from './ShutdownMenu.vue';
import StartsButton from './StartsButton.vue';
import ApplicationListButton from '@/components/starts/application-list/ApplicationListButton.vue';
import ApplicationList from '@/components/starts/application-list/ApplicationList.vue';
import { useSystemStore } from '@/store/SystemStore';
import TablePanel from '../table-panel/TablePanel.vue';

const system = useSystemStore()
 
</script>

<style scoped>

.start-panel-content-aera {
    display: grid;
    grid-template-rows: repeat(12, minmax(1fr, 1fr)) !important;
    height: 100%;
    width: 100%;
}
.start-panel-content-aera .table-transition {
    transition: all 0.5s cubic-bezier(.16,-0.04,.08,.99);
}

</style>