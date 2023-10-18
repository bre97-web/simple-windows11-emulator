<template>
    <IconButton has-hover has-active class="h-full select-none text-end px-2 flex justify-around"> 
        <p class="text-rm-1 text-black dark:text-white">{{ time }}</p>
        <p class="text-rm-1 text-black dark:text-white">{{ date }}</p>
    </IconButton>
</template>

<script setup lang="ts">
import moment from 'moment';
import { onMounted, onUnmounted, ref } from 'vue';

const date = ref(moment().format('MM-DD-YYYY'))
const time = ref(moment().format('HH:mm'))

const updateDateAndTime = () => {
    date.value = moment().format('MM-DD-YYYY')
    time.value = moment().format('HH:mm')
}

var timer: NodeJS.Timeout | null = null
onMounted(() => {
    timer = setInterval(updateDateAndTime, 1000)
})
onUnmounted(() => {
    clearInterval(timer)
})
</script>
