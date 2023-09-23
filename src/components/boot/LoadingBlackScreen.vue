<template>
    <div class="fixed full-screen top-0 right-0 bg-black">
        <div class="flex flex-col gap-8 items-center justify-center h-full w-full">
            <h1 class="text-white font-bold text-xl">{{ props.message }}</h1>

            <fluent-progress-ring></fluent-progress-ring>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    message: string
}>()
</script>

<style scoped>

</style>