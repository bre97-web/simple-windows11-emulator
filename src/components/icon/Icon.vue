<template>
    <span class="material-symbols-outlined relative icon">
        <slot></slot>
    </span>
</template>

<script setup lang="ts">


</script>

<style scoped>
.icon {
    aspect-ratio: auto;
    display: grid;
    place-content: center;
    user-select: none;
}

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}
</style>