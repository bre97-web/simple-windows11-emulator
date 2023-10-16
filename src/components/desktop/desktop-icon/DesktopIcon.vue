<template>
    <IconButton
        has-hover
        has-active
        class="w-fit h-fit"
        @click="doubleClickEvent"
    >
        <div class="grid place-content-center w-16 h-16">
            <Icon>{{ e.icon }}</Icon>
        </div>
    </IconButton>
</template>

<script setup lang="ts">
import { WindowAppDescription, createNewWindow } from '@/scripts/apps'

const props = defineProps<{
    e: WindowAppDescription
}>()

var counter = 0
var timer: NodeJS.Timeout | null = null
const doubleClickEvent = () => {
    if(counter !== 0) {
        createNewWindow(props.e.slot, props.e.title, props.e.icon)
        counter = 0
        return
    }

    counter = 200
    timer = setInterval(() => {
        counter -= 10
        if(counter <= 0) {
            counter = 0
            clearInterval(timer)
        }
    }, 10)
}


</script>

<style scoped>

</style>