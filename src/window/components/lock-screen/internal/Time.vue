<template>
    {{ time }}
</template>

<script setup lang="ts">
import moment from 'moment';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
    format: string
}>()

const time = ref(moment().format(props.format))
const updateDateAndTime = () => {
    time.value = moment().format(props.format)
}

var timer: NodeJS.Timeout | undefined = undefined
onMounted(() => {
    timer = setInterval(updateDateAndTime, 1000)
})
onUnmounted(() => {
    clearInterval(timer)
})
</script>

<style scoped>

</style>