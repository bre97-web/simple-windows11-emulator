<template>
    <div class="relative hover:bg-white/75 rounded-lg">
        <div class="w-full h-full active:scale-75 transition-all px-8 py-4">
            <md-icon class=" active: active:icon-filled transition-all">{{ props.icon }}</md-icon>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    icon: string
}>()
</script>

<style scoped>

</style>