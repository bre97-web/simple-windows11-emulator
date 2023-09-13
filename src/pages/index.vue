<template>
    <div class="relative z-0">
        <!-- <LockScreen></LockScreen> -->
        <!-- <LoadingBlackScreen message="Test"></LoadingBlackScreen> -->
        <div class="relative">
            <Desktop></Desktop>
            <StartsBar class="absolute bottom-0 right-0"></StartsBar>
        </div>
    </div>
</template>

<script setup lang="ts">
import LockScreen from '@/components/lock-screen/LockScreen.vue'
import LoadingBlackScreen from '@/components/boot/LoadingBlackScreen.vue'
import Desktop from '@/components/desktop/Desktop.vue'
import StartsBar from '@/components/starts/StartsBar.vue'
import LogoScreen from '@/components/boot/LogoScreen.vue';
</script>

<style lang="scss" scoped>

</style>