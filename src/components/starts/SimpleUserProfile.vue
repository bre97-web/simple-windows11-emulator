<template>
    <ExpandLayout>
        <template v-slot:actions="{ isExpanded, setIsExpanded }">
            <div
                @click="setIsExpanded(!isExpanded)"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] hover:bg-black/5"
            >
                <div class="rounded-full w-10 h-10 bg-red-500"></div>
                <span>Your name</span>
            </div>
        </template>

        <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">
            <div
                class="relative z-0"
                :class="[isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none']"
            >
                <fluent-menu class="absolute bottom-10 right-0 w-32 z-0">
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
