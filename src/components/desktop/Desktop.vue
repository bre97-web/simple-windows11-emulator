<template>
    <div class="relative wallpaper full-screen overflow-clip">
        <ul class="flex flex-col gap-2 flex-wrap p-2">
            <li v-for="e in app">
                <IconButton
                    has-hover
                    has-active
                    class="w-fit h-fit"
                    @click="() => {
                        createNewWindow(e.slot, e.title, e.icon)
                    }"
                >
                    <div class="grid place-content-center w-16 h-16">
                        <Icon>{{ e.icon }}</Icon>
                    </div>
                </IconButton>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { getAppList } from '@/scripts/apps';
import { createNewWindow } from '@/scripts/apps';

const app = getAppList()

</script>

<style scoped>

</style>