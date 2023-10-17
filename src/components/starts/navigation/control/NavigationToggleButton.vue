<template>
    <IconButton
        has-hover
        has-active
        @click="emits('setIsExpanded', !props.isExpanded)"
        class="h-full px-2"
    >
        <FlexLayout>
            <Icon class="scale-75">wifi</Icon>
            <Icon class="scale-75 hidden md:block">volume_up</Icon>
            <Icon class="scale-75 hidden md:block">power</Icon>
        </FlexLayout>
    </IconButton>
</template>

<script setup lang="ts">
const props = defineProps<{
    isExpanded: boolean
}>()
const emits = defineEmits<{
    (event: 'setIsExpanded', e: boolean): void,
}>()
</script>
