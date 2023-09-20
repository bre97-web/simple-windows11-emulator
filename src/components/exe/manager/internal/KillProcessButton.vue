<template>
    <fluent-button
        @click="() => {
            if(props.currentProcess !== null) {
                process.killProcess(props.currentProcess)
            }
        }"
        appearance="neutral"
    >End Process</fluent-button>
</template>

<script setup lang="ts">
import { useProcessStore, Process } from '@/store/ProcessStore'

const process = useProcessStore()

const props = defineProps<{
    currentProcess: Process
}>()
</script>
