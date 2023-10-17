<template>
    <div
        @click="() => {
            emits('closeStartsMenu')
            createNewWindow(props.app.slot, props.app.title, props.app.icon)
        }"
        :key="props.app.slot"
        class="hover:bg-white/75 dark:hover:bg-black/75"
    >
        <div class="inline-flex items-center justify-start h-full gap-2 p-2">
            <IconButton >
                <Icon>{{ props.app.icon }}</Icon>
            </IconButton>
            <p class="text-rm-1 select-none">{{ props.app.label }}</p>
        </div>
    </div>
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