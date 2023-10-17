<template>
    <IconButton has-hover has-active>
        <div class="select-none px-2 inline-flex flex-col items-end justify-around text-end whitespace-nowrap">
            <p class="text-rm-1">{{ time }}</p>
            <p class="text-rm-1">{{ date }}</p>
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
