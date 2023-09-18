<template>
    <div
        class="shape hover:bg-white/75 h-full aspect-square overflow-clip"
    >
        <div
            @click="emits('setIsExpanded', !props.isExpanded)"
            class="w-full h-full transition-all active:scale-75 grid place-content-center"
        >
            <div
                class="starts-button-group relative windows-starts-icon-special-shape overflow-clip w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[1.25px]"
            >
                <div class="first-block-highlight"></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    isExpanded: boolean
}>()
const emits = defineEmits<{
    (event: 'setIsExpanded', e: boolean): void,
}>()
</script>

<style scoped>

.starts-button-group > div.first-block-highlight {
    background: linear-gradient(135deg, #09e0fe, #08a1f7);
}
.starts-button-group > div {
    width: 100%;
    height: 100%;
    background-color: #08a1f7;
}
.starts-button-group:active > div {
    background: #004fe1;
}

</style>