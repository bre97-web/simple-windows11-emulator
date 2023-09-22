<template>
    <FlexLayout class="h-full gap-2">
        <ExpandLayout class="relative h-full">
            
            <!-- Open the starts panel -->
            <template v-slot:actions="{ isExpanded, setIsExpanded}">
                <NavigationToggleButton @set-is-expanded="setIsExpanded" :is-expanded="isExpanded"></NavigationToggleButton>
            </template>

            <!-- the Starts Panel -->
            <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">

                <div
                    class="full-screen fixed top-0 left-0 grid justify-end items-end pb-16 pr-2"
                    :class="[isExpanded ? 'active opacity-100' : 'opacity-0 select-none pointer-events-none']"
                >

                    <fluent-card class="relative backdrop-blur-lg bg-white/[0.85] w-full max-w-2xl overflow-auto max-h-[24rem]">

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
import NavigationButtons from '@/components/control/internal/NavigationButtons.vue'
import NavigationToggleButton from '@/components/control/internal/NavigationToggleButton.vue'
import NavigationSystemControl from '@/components/control/internal/NavigationSystemControl.vue';
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