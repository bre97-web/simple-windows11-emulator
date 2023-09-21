<template>
    <ul class="h-full w-fit flex gap-1 select-none">
        <Button
            v-for="e in process.getAllProcesses"
            :key="e.getProcessStateInstance().process.processId"
            @click="process.setMinimize(e, !e.getProcessStateInstance().accessibility.minimize)"
        >
            <p>
                {{ e.getProcessStateInstance().process.processId }}
            </p>
        </Button>
    </ul>
</template>

<script setup lang="ts">
import { useProcessStore } from '@/store/ProcessStore';
import Button from '@/components/starts/internal/Button.vue';

const process = useProcessStore()
</script>
