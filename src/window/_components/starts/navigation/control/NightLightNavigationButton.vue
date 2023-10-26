<template>
    <IconButton
        @click="system.toggleIsNightlight"
    >
        <Icon>
            light
        </Icon>
    </IconButton>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()
</script>
