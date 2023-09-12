<template>
    <div>
        <!-- <LockScreen></LockScreen> -->
        <div class="relative">
            <Desktop></Desktop>
            <StartsBar class="absolute bottom-0 right-0"></StartsBar>
        </div>
    </div>
</template>

<script setup lang="ts">
import LockScreen from '@/components/lock-screen/LockScreen.vue'
import Desktop from '@/components/desktop/Desktop.vue'
import StartsBar from '@/components/starts/StartsBar.vue'
</script>

<style lang="scss" scoped>

</style>