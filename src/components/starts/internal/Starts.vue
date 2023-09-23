<template>
    <ExpandLayout class="relative flex items-center justify-center max-w-fit flex-grow h-full aspect-square">
                
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
                class="full-screen fixed top-0 left-0 grid justify-center items-end pb-16"
                :class="[isExpanded ? 'active opacity-100' : 'opacity-0 select-none pointer-events-none']"
            >

                <fluent-card class="relative backdrop-blur-lg bg-white/[0.85] bottom-0 w-auto mx-auto max-w-3xl overflow-auto max-h-[32rem]">
                    <FlexLayout class="flex-col justify-between h-full">
                        <!-- Content in here -->
                        <FlexLayout class="flex-col px-8 py-4 pt-8 gap-8 justify-between overflow-auto">
                            <Search></Search>
                            <PinnedApps @click="setIsExpanded(false)"></PinnedApps>
                        </FlexLayout>

                        <!-- Account and shutdown button -->
                        <FlexLayout class="justify-between items-center bg-black/5 px-8 py-2 border-t">
                            <SimpleUserProfile></SimpleUserProfile>
                            <ShutdownMenu></ShutdownMenu>
                        </FlexLayout>
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
import StartsButton from './StartsButton.vue';
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