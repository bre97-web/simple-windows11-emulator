<template>
    <div class="fixed full-screen top-0 right-0 bg-black">
        <FlexLayout class="relative flex-col items-center justify-around h-full">
            <div class="relative z-1 h-[8.25rem] w-[8.25rem] mx-auto">
                <div class="absolute left-0 top-0 bg-blue-500 rounded-[4px] w-16 aspect-square"></div>
                <div class="absolute right-0 top-0 bg-blue-500 rounded-[4px] w-16 aspect-square"></div>
                <div class="absolute bottom-0 left-0 bg-blue-500 rounded-[4px] w-16 aspect-square"></div>
                <div class="absolute bottom-0 right-0 bg-blue-500 rounded-[4px] w-16 aspect-square"></div>
            </div>
            
            <fluent-progress-ring></fluent-progress-ring>
        </FlexLayout>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>