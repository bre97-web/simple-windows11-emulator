<template>
    <ul class="relative h-full w-fit flex gap-1 select-none">
        <div
            v-for="e in process.getAllProcesses"
            :key="e.getProcessStateInstance().process.processId"
            @click="process.setMinimize(e, !e.getProcessStateInstance().accessibility.minimize)"    
        >
            <IconButton
                has-hover
                has-active
                :id="'process' + e.getProcessStateInstance().process.processId"
            >
                {{ e.getProcessStateInstance().window.info.icon }}
            </IconButton>
            <fluent-tooltip
                position="top"
                :anchor="'process' + e.getProcessStateInstance().process.processId"
            >{{ e.getProcessStateInstance().window.info.title }}</fluent-tooltip>
        </div>
    </ul>
</template>

<script setup lang="ts">
import { useProcessStore } from '@/store/ProcessStore';

const process = useProcessStore()
</script>
