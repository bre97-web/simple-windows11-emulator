<template>

    <div>
        <slot name="app-one" :currentPage="currentPage" :setCurrentPage="setCurrentPage"></slot>
        <slot name="app-two" :currentPage="currentPage" :setCurrentPage="setCurrentPage"></slot>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

export type StartPanelPage = "page-one" | "page-two"

const currentPage = ref<StartPanelPage>('page-one')
const setCurrentPage = (e: StartPanelPage) => {
    currentPage.value = e
}
</script>

<style scoped>

</style>