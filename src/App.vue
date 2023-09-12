<template>
    <div class="flex flex-col max-h-screen h-full min-h-screen bg-[var(--md-sys-color-surface-container-low)]">
        <Header></Header>

        <main class="mb-4 relative bg-[var(--md-sys-color-surface-container-lowest)] self-center flex-grow overflow-auto rounded-3xl container">
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/Header.vue'
</script>
