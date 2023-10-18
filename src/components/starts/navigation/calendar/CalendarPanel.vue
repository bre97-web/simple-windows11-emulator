<template>
    <ExpandLayout>
        <template v-slot:actions="{ isExpanded, setIsExpanded }">
            <DateButton
                @click="setIsExpanded(!isExpanded)"
                class="invisible xs:visible"
            ></DateButton>
        </template>

        <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">
            <div
                class="start-panel full-screen fixed top-0 left-0 grid justify-end items-end pb-14 px-2 transition-all"
                :class="[isExpanded ? 'active' : 'inactive']"
            >

                <fluent-card class="relative backdrop-blur-lg bg-white/80 dark:bg-black/80  w-full max-w-2xl overflow-auto max-h-[24rem]">

                    <!-- Content in here -->
                    <FlexLayout class="flex-col p-4 gap-8 justify-between h-full">
                        <fluent-calendar></fluent-calendar>
                    </FlexLayout>
                </fluent-card>

                <!-- z-index set need near relative or fixed -->
                <div
                    @click="setIsExpanded(false)"
                    class="fixed left-0 bottom-0 w-screen h-screen -z-[1]"
                    v-show="isExpanded"
                ></div>
            </div>
        </template>

    </ExpandLayout>
</template>

<script setup lang="ts">
import DateButton from './DateButton.vue'
</script>

<style scoped>

</style>