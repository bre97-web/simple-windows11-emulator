<template>
    <div class="relative">
        <slot name="actions" :isExpanded="isExpanded" :setIsExpanded="setIsExpanded"></slot>
        <slot name="expanded-content" :isExpanded="isExpanded" :setIsExpanded="setIsExpanded"></slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isExpanded = ref(false)
const setIsExpanded = (e: boolean) => {
    isExpanded.value = e
}
</script>
