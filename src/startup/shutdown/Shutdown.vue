<template>
    <LoadingBlackScreen class="shutdown" message="Shutdown">
    </LoadingBlackScreen>
</template>

<script setup lang="ts">
import LoadingBlackScreen from '@/components/boot/LoadingBlackScreen.vue'
</script>

<style scoped>

.shutdown {
    animation: opacity-animation 0.25s cubic-bezier(.54,.01,.44,.9);
    opacity: 1;
}

@keyframes opacity-animation {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>