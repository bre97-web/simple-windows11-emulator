<template>
    <div
        :class="[needCloseScreen ? '-translate-y-[100%]' : '']"
        class="relative full-screen grid justify-center transition-all"
    >
        <div class="text-center mt-16">
            <DisplayLarge>
                <Time format="HH:mm"></Time>
            </DisplayLarge>
            <TitleLarge>
                <Time format="MM-DD-YYYY"></Time>
            </TitleLarge>
        </div>
    </div>
</template>

<script setup lang="ts">
import Time from '@/components/date-time/Time.vue'
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
    setIsTyped: (e: boolean) => void
}>()

/**
 * For class animation
 */
const needCloseScreen = ref(false)
const closeScreenSaverDelay = async () => new Promise(() => setTimeout(() => {
    props.setIsTyped(true)
}, 300))

var clickScreenEvent = async () => {
    needCloseScreen.value = true
    await closeScreenSaverDelay()
}
onMounted(() => {
    window.addEventListener('click', clickScreenEvent)
    window.addEventListener('keypress', clickScreenEvent)
})
onUnmounted(() => {
    window.removeEventListener('click', clickScreenEvent)
    window.removeEventListener('keypress', clickScreenEvent)

})
</script>
