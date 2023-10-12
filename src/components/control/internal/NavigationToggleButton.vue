<template>
    <div
        @click="emits('setIsExpanded', !props.isExpanded)"
        class="rounded hover:bg-white/75 transition-all w-full h-full"
    >
        <div class="w-full h-full active:scale-75 transition-all px-2">
            <div class="w-full h-full grid place-content-center">
                <FlexLayout>
                    <Icon class="scale-75">wifi</Icon>
                    <Icon class="scale-75 hidden md:block">volume_up</Icon>
                    <Icon class="scale-75 hidden md:block">power</Icon>
                </FlexLayout>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    isExpanded: boolean
}>()
const emits = defineEmits<{
    (event: 'setIsExpanded', e: boolean): void,
}>()
</script>
