<template>
    <div class="relative overflow-clip text-ellipsis w-full h-full">
        <IconButton
            has-hover
            has-active
            @click="() => {
                emits('closeStartsMenu')
                openNewWindow(props.app.slot, props.app.title, props.app.icon)
            }"
            :key="props.app.slot"
        >
            <div class="flex flex-row items-center gap-2 p-2">
                <Icon>{{ props.app.icon }}</Icon>
                <LabelLarge class="select-none">{{ props.app.label }}</LabelLarge>
            </div>
        </IconButton>

    </div>
</template>

<script setup lang="ts">
import { WindowAppDescription } from '@/scripts/apps';
import { useProcessStore } from '@/store/ProcessStore';

const props = defineProps<{
    app: WindowAppDescription
}>()

const emits = defineEmits<{
    (event: 'closeStartsMenu'): void
}>()

/**
 * Test
 */
const process = useProcessStore()
const openNewWindow = (slot: any, title: string, icon = 'bug_report') => {
    const window = process.createNewProcess({
        title,
        icon
    }, slot)
    window.mount()
}
</script>

<style scoped>

</style>