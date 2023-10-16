<template>
    <FlexLayout class="h-full gap-2">
        <ControlPanel></ControlPanel>

        <CalendarPanel></CalendarPanel>
    </FlexLayout>
</template>

<script setup lang="ts">
import CalendarPanel from './calendar/CalendarPanel.vue';
import ControlPanel from './control/ControlPanel.vue';

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