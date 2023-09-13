<template>
    <div class="fixed full-screen top-0 right-0 bg-black">
        <FlexLayout class="flex-col gap-8 items-center justify-center h-full w-full">
            <TitleLarge class="text-white">{{ props.message }}</TitleLarge>

            <fluent-progress-ring></fluent-progress-ring>
        </FlexLayout>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    message: string
}>()
</script>

<style scoped>

</style>