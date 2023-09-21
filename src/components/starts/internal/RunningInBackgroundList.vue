<template>
    <ul class="h-full w-fit flex gap-1 select-none">
        <Button
            v-for="e in process.getAllProcesses"
            :key="e.instance._component.props['windowState']['value']['processId']"
            @click="process.setRunningInBackground(e, !e.instance._component.props['windowState']['value']['runningInBackground'])"
        >
            <p>
                {{ e.instance._component.props['windowState']['value']['processId'] }}
            </p>
        </Button>
    </ul>
</template>

<script setup lang="ts">
import { useProcessStore } from '@/store/ProcessStore';
import Button from '@/components/starts/internal/Button.vue';

const process = useProcessStore()
</script>

<style scoped>

</style>