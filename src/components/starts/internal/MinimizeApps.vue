<template>
    <ul class="relative h-full flex gap-1 select-none overflow-auto">
        <div
            v-for="e in process.getAllProcesses"
            :key="e.getProcessStateInstance().process.processId"
            @click="() => {
                process.setMinimize(e, !e.getProcessStateInstance().accessibility.minimize)
                process.cleanActive()
                process.cleanFocus()
                e.getProcessStateInstance().accessibility.active = true
                e.getProcessStateInstance().accessibility.focus = true
                process.setTopZIndex(e)
            }"
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
