<template>
    <div class="relative full-screen overflow-clip">

        <div
            :class="[isTyped ? 'blur-[28px] scale-125 brightness-75' : '']"
            class="absolute full-screen transition-all lock-screen-wallpaper "
        ></div>

        <ScreenSaver
            v-if="!isTyped"
            :set-is-typed="setIsTyped"
        ></ScreenSaver>

        <Login v-else></Login>

    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ScreenSaver from './ScreenSaver.vue';
import Login from './Login.vue';

const isTyped = ref(false)
const setIsTyped = (e: boolean) => {
    isTyped.value = e
}


var timer: NodeJS.Timeout = undefined
const setIsTypedForFalseEvent = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        setIsTyped(false)
    }, 10000)
}

onMounted(() => {
    window.addEventListener('mousemove', setIsTypedForFalseEvent)
    window.addEventListener('keypress', setIsTypedForFalseEvent)
})
onUnmounted(() => {
    window.removeEventListener('mousemove', setIsTypedForFalseEvent)
    window.removeEventListener('keypress', setIsTypedForFalseEvent)

})
</script>
