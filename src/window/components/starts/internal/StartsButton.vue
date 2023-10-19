<template>
    <ScalingButton
        class="h-full aspect-square"
        @click="() => {
            system.setStarts({
                ...system.getSystemStarts,
                isOpening: !props.isExpanded
            })
            emits('setIsExpanded', !props.isExpanded)
        }"
    >
        <div
            class="starts-button-group relative windows-starts-icon-special-shape overflow-clip w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[1.25px]">
            <div class="first-block-highlight"></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
    </ScalingButton>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/SystemStore';
import { onMounted, onUnmounted } from 'vue';

const props = defineProps<{
    isExpanded: boolean
}>()
const emits = defineEmits<{
    (event: 'setIsExpanded', e: boolean): void,
}>()

const system = useSystemStore()

var keys: string[] = []
const toggleStarts = (e: KeyboardEvent) => {
    if (keys.length === 0) {
        keys[0] = e.code
        return
    } else if (keys.length === 1) {
        keys[1] = e.code

    } else if (e.code !== keys[1]) {
        keys.shift()
        keys[1] = e.code
    }

    if (!['ShiftLeft', 'ShiftRight'].includes(keys[0])) return

    if (keys[1] === 'MetaLeft') {
        system.setStarts({
            ...system.getSystemStarts,
            isOpening: !props.isExpanded
        })
        emits('setIsExpanded', !props.isExpanded)
    }
    keys = []
}

onMounted(() => {
    document.addEventListener('keydown', toggleStarts)
})
onUnmounted(() => {
    document.removeEventListener('keydown', toggleStarts)
})
</script>

<style scoped>
.starts-button-group>div.first-block-highlight {
    background: linear-gradient(135deg, #09e0fe, #08a1f7);
}

.starts-button-group>div {
    width: 100%;
    height: 100%;
    background-color: #08a1f7;
}

.starts-button-group:active>div {
    background: #004fe1;
}
</style>