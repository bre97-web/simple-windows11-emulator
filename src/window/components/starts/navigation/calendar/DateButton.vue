<template>
    <IconButton class="px-2 h-full">
        <div class="text-end place-items-end place-content-between h-full">
            <p class="text-rm-1 text-black dark:text-white">{{ time }}</p>
            <p class="text-rm-1 text-black dark:text-white">{{ date }}</p>
        </div>
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
