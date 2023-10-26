<template>
    <label class="flex gap-4">
        <h1 class="text-rb">Blur</h1>
        <fluent-checkbox
            ref="checkbox"
            @change="setBlurEnabled"
        ></fluent-checkbox>
    </label>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/ThemeStore';
import { onMounted, ref } from 'vue';

const checkbox = ref<HTMLElement>()
const theme = useThemeStore()

const setBlurEnabled = (e: CustomEvent) => {
    theme.setBlurenabled((e.target as HTMLElement & { checked: boolean }).checked)
}

onMounted(() => {
    (checkbox.value as HTMLElement & { checked: boolean }).checked = theme.getTheme.blurEnabled
})
</script>
@/store/themeSlice