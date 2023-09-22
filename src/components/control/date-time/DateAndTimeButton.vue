<template>
    <div class="relative hover:bg-white/75 shape">
        <FlexLayout class="select-none w-full h-full active:scale-75 transition-all px-2 flex flex-col items-end justify-around text-end">
            <LabelMedium>{{ time }}</LabelMedium>
            <LabelSmall>{{ date }}</LabelSmall>
        </FlexLayout>
    </div>
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

var timer: NodeJS.Timeout = undefined
onMounted(() => {
    timer = setInterval(updateDateAndTime, 1000)
})
onUnmounted(() => {
    clearInterval(timer)
})
</script>
