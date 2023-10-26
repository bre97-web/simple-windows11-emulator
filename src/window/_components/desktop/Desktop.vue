<template>
    <div class="relative wallpaper full-screen overflow-clip">

        <!-- Desktop Application Icons -->
        <ul class="flex flex-col gap-2 flex-wrap p-2">
            <DesktopIcon v-for="(e, index) in app" :e="e" :key="index"></DesktopIcon>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { getAppList } from '@/scripts/apps'
import DesktopIcon from './desktop-icon/DesktopIcon.vue'

const app = getAppList()

</script>
