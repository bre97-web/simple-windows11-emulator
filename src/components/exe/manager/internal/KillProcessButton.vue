<template>
    <fluent-button
        @click="() => {
            if(props.currentProcess !== null) {
                process.killProcessByProcessId(props.currentProcess.getProcessStateInstance().process.processId)
            }
        }"
        appearance="neutral"
    >End Process</fluent-button>
</template>

<script setup lang="ts">
import { Process } from '@/hooks/useWindow';
import { useProcessStore } from '@/store/ProcessStore'

const process = useProcessStore()

const props = defineProps<{
    currentProcess: Process | null
}>()
</script>
