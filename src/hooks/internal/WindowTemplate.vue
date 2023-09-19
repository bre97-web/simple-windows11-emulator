<template>
  <div
    @mousedown="() => {
      cleanOtherWindowsFocus()
      emits('focus')
      cleanOtherWindowsActive()
      emits('active')
      swapZIndex()
    }"
    @mouseover="emits('focus')"
    @mouseout="() => {
      emits('unfocus')
    }"
    class="select-none fixed transition-all active:transition-none"
    :style="{
      'left' : props.windowState.value.maximize ? '0' : props.windowState.value.position.x + 'px',
      'top' : props.windowState.value.maximize ? '0' : props.windowState.value.position.y + 'px',
      'width': props.windowState.value.maximize ? '100%' : 'auto',
      'height': props.windowState.value.maximize ? '100%' : 'auto',
      'z-index': props.windowState.value.activeZIndex + 1000,
    }"
    :class="[props.windowState.value.active ? 'shadow-xl' : '']"
  >
    <div class="shape-container h-full w-full overflow-clip border-[1.5px] border-black/20">

      <header class="select-none w-full h-8 bg-white/75 backdrop-blur-xl">
        <div class="w-full h-full flex items-center justify-between">
          <h1
            @mousedown="emits('gragwindow', $event)"
            class="h-full px-2 flex items-center w-full min-w-[32px] text-ellipsis overflow-clip"
          >{{ props.title }}</h1>

          <nav class="w-fit h-full flex items-center justify-end">
            <div class="w-full h-full icon-has-hover">
              <div class="icon icon-has-active px-2 md:px-4 h-full">
                <md-icon>minimize</md-icon>
              </div>
            </div>

            <div @click="emits('maximize')" class="w-full h-full icon-has-hover">
              <div class="icon icon-has-active px-2 md:px-4 h-full">
                <md-icon>check_box_outline_blank</md-icon>
              </div>
            </div>

            <div @click="emits('close')" class="w-full h-full icon-has-hover">
              <div class="icon icon-has-active px-2 md:px-4 h-full">
                <md-icon>Close</md-icon>
              </div>
            </div>

          </nav>
        </div>
      </header>

      <main class="h-full backdrop-blur-xl bg-white/75 overflow-auto">
        <slot></slot>
      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useProcessStore } from '@/store/ProcessStore';
import { Ref } from 'vue';

/**
 * Windows Props and Emits
 */
const props = defineProps<{
  title: string
  windowState: Ref<{
    focus: boolean
    active: boolean
    maximize: boolean
    runningInBackground: boolean
    position: {
      x: number
      y: number
    }
    activeZIndex: number
  }>
}>()
const emits = defineEmits<{
  (event: 'close'): void
  (event: 'maximize'): void
  (event: 'focus'): void
  (event: 'unfocus'): void
  (event: 'active'): void
  (event: 'inactive'): void
  (event: 'gragwindow', e: MouseEvent): boolean
}>()


const process = useProcessStore()

const cleanOtherWindowsFocus = () => {
  process.cleanFocus()
}
const cleanOtherWindowsActive = () => {
  process.cleanActive()
}
const swapZIndex = () => {
  if(process.getAllProcesses.length === 1) return 

  const currentWindowZIndex = process.getAllProcesses.filter(e => props.windowState.value.activeZIndex === e.instance._component.props['windowState']['value']['activeZIndex'])[0].instance._component.props['windowState']['value']['activeZIndex']

  const zIndexList: number[] = process.getAllProcesses.map(e => e.instance._component.props['windowState']['value']['activeZIndex'])

  const max = zIndexList.reduce((last, cur) => last > cur ? last : cur)

  console.log(currentWindowZIndex, max);
  

  process.swapZIndex(currentWindowZIndex, max)
  
}
</script>
