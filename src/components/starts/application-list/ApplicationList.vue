<template>
    <FlexLayout class="flex-col gap-2">
        <ApplicationListItem
            v-for="(e, index) in apps"
            :index="index"
            :app="e"
            @close-starts-menu="emits('closeStartsMenu')"
        ></ApplicationListItem>
    </FlexLayout>
</template>

<script setup lang="ts">
import { getAppList } from '@/scripts/apps';
import ApplicationListItem from './ApplicationListItem.vue'

const emits = defineEmits<{
    (event: 'closeStartsMenu'): void
}>()

const apps = getAppList()
</script>
