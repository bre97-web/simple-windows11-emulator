<template>
    <div
        graggable="true"
        :class="[
            needCloseScreen ? '-translate-y-[10%] opacity-0 transition-all' : '',
            gragState.active ? '' : 'transition-all'
        ]"
        :style="{
            'top': -gragState.cur / 8 + 'px'
        }"
        class="relative left-0 full-screen grid justify-center select-none"
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
import { onMounted, onUnmounted, reactive, ref } from 'vue';

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

const keyPressScreenEvent = async () => {
    needCloseScreen.value = true
    await closeScreenSaverDelay()
}

/**
 * 拖拽时保存的数据对象
 */
const gragState = reactive({

    /**
     * 鼠标点击时记录
     * 起始点
     */
    start: 0,

    /**
     * 鼠标松开时记录
     * 结束点
     */
    end: 0,

    /**
     * 当鼠标点击后开始记录
     * 当前点
     */
    cur: 0,

    /**
     * 记录到的最大的点
     */
    curMax: 0,

    /**
     * 当鼠标点击时为true，当鼠标松开时为false
     * 是否在点击或为松开的状态
     */
    active: false
})

/**
 * 更新起始点
 * 它在 updateCur() 、updateCur、onUnmounted中被使用
 */
const updateStart = (e: MouseEvent) => {
    gragState.active = true
    gragState.start = e.screenY
}
/**
 * 更新结束点
 * 它在 swipeScreenEvent()中被使用
 */
const updateEnd = (e: MouseEvent) => {
    gragState.active = false
    gragState.end = e.screenY
    gragState.cur = 0
}
/**
 * 更新当前点
 * 它在onMounted、onUnmounted中被使用
 */
const updateCur = (e: MouseEvent) => {
    if(!gragState.active) return

    if(gragState.start > e.screenY) {
        gragState.cur = gragState.start - e.screenY
    } else {
        gragState.curMax = e.screenY
        gragState.cur = 0
        gragState.start = gragState.curMax
    }
}

const swipeScreenEvent = async (e: MouseEvent) => {
    updateEnd(e)

    if((gragState.start - gragState.end) >= (e.view.innerHeight / 3)) {
        needCloseScreen.value = true
        await closeScreenSaverDelay()
    }
}
onMounted(() => {
    window.addEventListener('mousedown', updateStart)
    window.addEventListener('mousemove', updateCur)
    window.addEventListener('mouseup', swipeScreenEvent)
    window.addEventListener('keypress', keyPressScreenEvent)
})
onUnmounted(() => {
    window.removeEventListener('dragstart', updateStart)
    window.removeEventListener('mousemove', updateCur)
    window.removeEventListener('mouseup', swipeScreenEvent)
    window.removeEventListener('keypress', keyPressScreenEvent)

})
</script>
