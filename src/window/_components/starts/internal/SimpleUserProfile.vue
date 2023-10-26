<template>
    <ExpandLayout>
        <template v-slot:actions="{ isExpanded, setIsExpanded }">
            <IconButton @click="setIsExpanded(!isExpanded)" class="px-2 py-1">
                <div class="flex items-center gap-2">
                    <div class="rounded-full w-8 h-8 border"></div>
                    <span class="text-rb max-w-[12rem] overflow-clip text-ellipsis">{{ user.getUserAccountState.name }}</span>
                </div>
            </IconButton>
        </template>

        <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">
            <div
                class="relative z-0"
                :class="[isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none']"
            >
                <fluent-menu class="absolute bottom-10 left-0 w-32 z-0">
                    <fluent-menu-item @click="logout">Sign-out</fluent-menu-item>
                    <fluent-menu-item>Lock</fluent-menu-item>
                </fluent-menu>
                <div
                    v-show="isExpanded"
                    @click="setIsExpanded(false)"
                    class="fixed full-screen bottom-0 right-0 -z-[1]"
                ></div>
            </div>
        </template>
    </ExpandLayout>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/SystemStore';
import { useUserStore } from '@/store/UserStore';

const system = useSystemStore()
const user = useUserStore()

const logout = () => {
    user.setIsLogout(true)
    system.setIsLocked(true)
}
</script>
