<template>
    <ExpandLayout class="relative">
        <template v-slot:actions="{ isExpanded, setIsExpanded }">
            <IconButton has-hover has-active @click="setIsExpanded(!isExpanded)">
                <div class="h-full aspect-square p-2">
                    <Icon>
                        power_settings_new
                    </Icon>
                </div>
            </IconButton>
        </template>
        <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">
            <div
                class="fixed z-0"
                :class="[isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none']"
            >
                <fluent-menu class="absolute bottom-10 right-0 w-32 z-0">
                    <fluent-menu-item>Sleep</fluent-menu-item>
                    <fluent-menu-item @click="system.setNeedShutdown(true)">Shut down</fluent-menu-item>
                    <fluent-menu-item>Restart</fluent-menu-item>
                </fluent-menu>
                <div
                    v-show="isExpanded"
                    @click="setIsExpanded(false)"
                    class="fixed w-screen h-screen bottom-0 right-0 -z-[1]"
                ></div>
            </div>
        </template>
    </ExpandLayout>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()
</script>

<style scoped></style>