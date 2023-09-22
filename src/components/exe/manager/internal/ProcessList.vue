<template>
    <li
        v-for="e in process.getAllProcesses"
        :key="e.getProcessStateInstance().process.processId"
        @click="emits('setCurrentProcess', e)"
        class="transition-all active:bg-white px-4 py-2 shape flex gap-2 overflow-auto"
        :class="[e === props.currentProcess ? 'bg-blue-500/25 hover:bg-blue-500/50' : 'hover:bg-white/75']"
    >
        <slot :e="e"></slot>
    </li>
</template>

<script setup lang="ts">
import { Process } from '@/hooks/useWindow';
import { useProcessStore } from '@/store/ProcessStore'

const process = useProcessStore()

const props = defineProps<{
    currentProcess: Process | null
}>()
const emits = defineEmits<{
    (event: 'setCurrentProcess', e: Process): void
}>()

</script>
