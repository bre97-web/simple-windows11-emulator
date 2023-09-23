<template>
    <LoadingBlackScreen class="z-highest shutdown flex justify-center items-center">

        <template v-if="process.getAllProcesses.length === 0">
            <div class="full-screen flex flex-col items-center justify-center gap-8">
                <h1 class="text-white font-bold text-xl">Shutdown</h1>
                <fluent-progress-ring></fluent-progress-ring>
            </div>
        </template>

        <template v-else>
            <div class="container h-full max-h-96 flex flex-col gap-8 p-4 overflow-auto">
                <div class="space-y-4 w-full h-full">
                    <h1 class="text-white font-bold text-xl">Some processes is running</h1>
                    <ul
                        v-for="e in process.getAllProcesses"
                        :key="e.getProcessStateInstance().process.processId"
                        class="text-white flex flex-col overflow-auto"
                    >
                        <li class="transition-all flex items-center justify-between py-1 px-2 hover:bg-white/25 rounded">
                            <div class="inline-flex gap-2">
                                <span class="material-symbols-outlined">{{ e.getProcessStateInstance().window.info.icon }}</span>
                                <p>{{ e.getProcessStateInstance().window.info.title }}</p>
                            </div>
                            <div class="flex items-center justify-end">
                                <span
                                    @click="process.killProcessByProcessId(e.getProcessStateInstance().process.processId)"
                                    class="scale-75 p-2 rounded-full select-none hover:bg-white/25 material-symbols-outlined"
                                >close</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="flex gap-2 items-center justify-end">
                    <fluent-button @click="() => {
                        process.killAllProcesses()
                    }">End All Processes</fluent-button>
                </div>
            </div>

        </template>
        
    </LoadingBlackScreen>
</template>

<script setup lang="ts">
import LoadingBlackScreen from '@/components/boot/LoadingBlackScreen.vue'
import { useProcessStore } from '@/store/ProcessStore'
import { useSystemStore } from '@/store/SystemStore';
import { onBeforeUnmount, onMounted, watch } from 'vue';

const process = useProcessStore()
const system = useSystemStore()

watch(() => process.getAllProcesses.length, () => {
    if(process.getAllProcesses.length === 0) {
        system.setIsShutdown(true)
    }
}, { immediate: true })

var timer: NodeJS.Timeout
onMounted(() => {
    timer = setTimeout(() => {
        process.killAllProcesses()
    }, 120000)
})
onBeforeUnmount(() => {
    clearTimeout(timer)
})
</script>

<style scoped>

.shutdown {
    animation: opacity-animation 0.25s cubic-bezier(.54,.01,.44,.9);
    opacity: 1;
}

@keyframes opacity-animation {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>