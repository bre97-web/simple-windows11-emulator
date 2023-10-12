<template>
    <IconButton
        has-hover
        has-active
        @click="system.toggleIsNightlight"
        :class="{'bg-primary-500': system.getSystemIsNightlight}"
    >
        <div class="px-8 py-4">
            <Icon>
                light
            </Icon>
        </div>
    </IconButton>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()
</script>
