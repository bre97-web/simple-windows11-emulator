<template>
    <IconButton
        @click="() => {
            emits('closeStartsMenu')
            createNewWindow(props.app.slot, props.app.title, props.app.icon)
        }"
        :key="props.app.slot"
    >
        <div class="inline-flex items-center justify-start w-full h-full gap-2 p-2">
            <Icon>{{ props.app.icon }}</Icon>
            <p class="text-rm-1 select-none">{{ props.app.label }}</p>
        </div>
    </IconButton>
</template>

<script setup lang="ts">
import { WindowAppDescription } from '@/scripts/apps';
import { createNewWindow } from '@/scripts/apps';

const props = defineProps<{
    app: WindowAppDescription
}>()

const emits = defineEmits<{
    (event: 'closeStartsMenu'): void
}>()

</script>

<style scoped>

</style>