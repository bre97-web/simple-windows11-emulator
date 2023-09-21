<template>
    <ul class="relative h-full w-fit flex gap-1 select-none">
        <div
            v-for="e in process.getAllProcesses"
            :key="e.getProcessStateInstance().process.processId"
            @click="process.setMinimize(e, !e.getProcessStateInstance().accessibility.minimize)"    
        >
            <Button :id="'process' + e.getProcessStateInstance().process.processId">
                <md-icon >{{ e.getProcessStateInstance().window.info.icon }}</md-icon>
            </Button>
            <fluent-tooltip
                position="top"
                :anchor="'process' + e.getProcessStateInstance().process.processId"
            >{{ e.getProcessStateInstance().window.info.title }}</fluent-tooltip>
        </div>
    </ul>
</template>

<script setup lang="ts">
import { useProcessStore } from '@/store/ProcessStore';
import Button from '@/components/starts/internal/Button.vue';

const process = useProcessStore()
</script>
