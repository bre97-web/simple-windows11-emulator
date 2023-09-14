<template>
    <div class="w-full max-w-full h-12 window-border">

        <!-- No need gap -->
        <FlexLayout class="relative z-0 back-blur items-center justify-between h-full w-full p-1">

            <div class="flex-none w-28"></div>

            <!-- StartButton -->
            <ExpandLayout class="relative h-full aspect-square">
                
                <!-- Open the starts panel -->
                <template v-slot:actions="{ isExpanded, setIsExpanded}">
                    <div
                        @click="setIsExpanded(!isExpanded)"
                        class="rounded-md hover:border hover:bg-white/75 transition-all h-full aspect-square"
                    >
                        <StartsButton></StartsButton>
                    </div>
                </template>

                <!-- the Starts Panel -->
                <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">

                    <div
                        class="full-screen fixed top-0 left-0 grid justify-center items-end pb-16"
                        :class="[isExpanded ? 'active opacity-100' : 'opacity-0 select-none pointer-events-none -z-[1]']"
                    >

                        <fluent-card class="relative bottom-0 w-auto mx-auto max-w-2xl rounded-xl min-h-min h-auto max-h-[32rem] back-blur bg-transparent">

                            <!-- Content in here -->
                            <FlexLayout class="flex-col px-8 py-4 pt-8 gap-8 justify-between h-full">
                                <FlexLayout class="flex-grow flex-col gap-4">
                                    <Search></Search>
                                    <PinnedApps></PinnedApps>
                                </FlexLayout>
                                
                                <div class="flex-none space-y-4">
                                    <fluent-divider class="bg-black/5 flex-none h-[1px]"></fluent-divider>
                                    <FlexLayout class="justify-between items-center">
                                        <SimpleUserProfile></SimpleUserProfile>
                                        <ShutdownMenu></ShutdownMenu>
                                    </FlexLayout>
                                </div>
                            </FlexLayout>
                        </fluent-card>

                        <!-- z-index set need near relative or fixed -->
                        <div
                            @click="setIsExpanded(false)"
                            class="fixed left-0 bottom-0 w-screen h-screen"
                            :class="[isExpanded ? 'opacity-100 -z-[1]' : 'opacity-0 select-none pointer-events-none -z-[1]']"
                        ></div>
                    </div>
                </template>
            </ExpandLayout>

            <div class="flex-none w-28 h-full">
                <Naviagtion></Naviagtion>
            </div>

        </FlexLayout>


    </div>
</template>

<script setup lang="ts">
import StartsButton from './StartsButton.vue';
import Search from './Search.vue';
import PinnedApps from './PinnedApps.vue';
import SimpleUserProfile from './SimpleUserProfile.vue';
import ShutdownMenu from './ShutdownMenu.vue';
import Naviagtion from '@/components/control/Navigation.vue';



</script>

<style lang="css" scoped>
.active {
    animation: activeAnimate 0.15s linear;
}
.inactive {
    animation: activeAnimate 0.15s linear reverse;
}

@keyframes activeAnimate {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
}
</style>