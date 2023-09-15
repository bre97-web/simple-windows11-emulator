<template>
    <ExpandLayout class="relative flex items-center justify-center w-1/4 flex-grow h-full aspect-square">
                
        <!-- Open the starts panel -->
        <template v-slot:actions="{ isExpanded, setIsExpanded}">
            <div
                @click="setIsExpanded(!isExpanded)"
                class="rounded-md hover:border hover:bg-white/75 transition-all h-full aspect-square"
            >
                <md-icon class="active:scale-75 active:icon-filled w-full h-full grid place-content-center">
                    window
                </md-icon>
            </div>
        </template>

        <!-- the Starts Panel -->
        <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">

            <div
                class="full-screen fixed top-0 left-0 grid justify-center items-end pb-16"
                :class="[isExpanded ? 'active opacity-100' : 'opacity-0 select-none pointer-events-none']"
            >

                <fluent-card class="relative backdrop-blur-[28px] bg-white/[0.85] bottom-0 w-auto mx-auto max-w-2xl rounded-xl overflow-auto max-h-[32rem]">

                    <!-- Content in here -->
                    <FlexLayout class="flex-col px-8 py-4 pt-8 gap-8 justify-between h-full overflow-auto">
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
</script>

<style scoped>
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