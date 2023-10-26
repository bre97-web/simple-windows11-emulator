<template>
    <fluent-button appearance="neutral">
        {{ props.label }}
        <span slot="end" class="material-symbols-outlined">{{ props.icon }}</span>
    </fluent-button>
</template>

<script setup lang="ts">
const props = defineProps<{
    label: string
    icon: string
}>()
</script>

<style scoped>

</style>