<template>
    <FlexLayout class="h-full gap-2">
        <ExpandLayout class="relative h-full">
            
            <!-- Open the starts panel -->
            <template v-slot:actions="{ isExpanded, setIsExpanded}">
                <div
                    @click="setIsExpanded(!isExpanded)"
                    class="rounded-md hover:border hover:bg-white/75 transition-all h-full px-2"
                >
                    <div class="w-full h-full grid place-content-center">
                        <FlexLayout class="gap-2 active:scale-75 active:icon-filled transition-all">
                            <md-icon>wifi</md-icon>
                            <md-icon class="hidden md:block">bluetooth</md-icon>
                            <md-icon class="hidden md:block">power</md-icon>
                        </FlexLayout>
                    </div>
                </div>
            </template>

            <!-- the Starts Panel -->
            <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">

                <div
                    class="full-screen fixed top-0 left-0 grid justify-end items-end pb-16 pr-2"
                    :class="[isExpanded ? 'active opacity-100' : 'opacity-0 select-none pointer-events-none']"
                >

                    <fluent-card class="relative back-blur bg-transparent w-full max-w-2xl rounded-xl h-[16rem] max-h-[24rem]">

                        <!-- Content in here -->
                        <FlexLayout class="flex-col p-4 gap-8 justify-between h-full">
                            <NavigationButtons></NavigationButtons>

                            <NavigationSystemControl></NavigationSystemControl>
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

        <DateAndTimeButton></DateAndTimeButton>
    </FlexLayout>
</template>

<script setup lang="ts">
import NavigationButtons from '@/components/control/NavigationButtons.vue'
import NavigationSystemControl from './NavigationSystemControl.vue';
import DateAndTimeButton from '@/components/control/date-time/DateAndTimeButton.vue';

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