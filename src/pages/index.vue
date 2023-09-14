<template>
    <div class="relative z-0">
        <!-- <LockScreen></LockScreen> -->
        <!-- <LoadingBlackScreen message="Test"></LoadingBlackScreen> -->
        <div class="relative">
            <Desktop></Desktop>
        </div>
    </div>
</template>

<script setup lang="ts">
import LockScreen from '@/components/lock-screen/LockScreen.vue'
import LoadingBlackScreen from '@/components/boot/LoadingBlackScreen.vue'
import Desktop from '@/components/desktop/Desktop.vue'
import LogoScreen from '@/components/boot/LogoScreen.vue';
</script>

<style lang="scss" scoped>

</style>