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
    class="select-none fixed leadin-animation transition-all active:transition-none"
    :class="[
      props.getProcessStateInstance().accessibility.active ? 'shadow-xl' : '',
      props.getProcessStateInstance().accessibility.minimize ? 'opacity-0 scale-0 select-none pointer-events-none -z-[99999]' : ''
    ]"
    :style="{
      'left' : props.getProcessStateInstance().accessibility.maximize ? '0' : props.getProcessStateInstance().window.position.x + 'px',
      'top' : props.getProcessStateInstance().accessibility.maximize ? '0' : props.getProcessStateInstance().window.position.y + 'px',
      'width': props.getProcessStateInstance().accessibility.maximize ? '100%' : 'auto',
      'height': props.getProcessStateInstance().accessibility.maximize ? '100%' : 'auto',
      'z-index': props.getProcessStateInstance().window.info.activeZIndex + 1000,
    }"
  >
    <div class="shape-container h-full w-full overflow-clip border-[1.5px] border-black/20">

      <header class="select-none w-full h-8 bg-white/75 backdrop-blur-xl">
        <div class="w-full h-full flex items-center justify-between">
          <h1
            @mousedown="emits('gragwindow', $event)"
            class="h-full px-2 flex items-center w-full min-w-[32px] text-ellipsis overflow-clip"
          >{{ props.getProcessStateInstance().window.info.title }}</h1>

          <nav class="w-fit h-full flex items-center justify-end">
            <div @click="emits('minimize')" class="w-full h-full icon-has-hover">
              <div class="icon icon-has-active px-2 md:px-4 h-full">
                <md-icon>minimize</md-icon>
              </div>
            </div>

            <div @click="emits('maximize')" class="w-full h-full icon-has-hover">
              <div class="icon icon-has-active px-2 md:px-4 h-full">
                <md-icon>check_box_outline_blank</md-icon>
              </div>
            </div>

            <div
              @click="() => {
                process.killProcessByProcessId(props.getProcessStateInstance().process.processId)
                emits('close')
              }"
              class="w-full h-full icon-has-hover"
            >
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
import { ProcessState } from '../useProcessState';

const props = defineProps<{
  getProcessStateInstance: () => ProcessState
}>()
const emits = defineEmits<{
  (event: 'close'): void
  (event: 'maximize'): void
  (event: 'minimize'): void
  (event: 'focus'): void
  (event: 'unfocus'): void
  (event: 'active'): void
  (event: 'inactive'): void
  (event: 'gragwindow', e: MouseEvent): boolean
}>()


const process = useProcessStore()

const cleanOtherWindowsFocus = () => {
  if(process.getAllProcesses.length <= 1) return 
  process.cleanFocus()
}
const cleanOtherWindowsActive = () => {
  if(process.getAllProcesses.length <= 1) return 
  process.cleanActive()
}
const swapZIndex = () => {
  if(process.getAllProcesses.length <= 1) return 
  const currentWindowZIndex = props.getProcessStateInstance().window.info.activeZIndex
  const zIndexList: number[] = process.getAllProcesses.map(e => e.getProcessStateInstance().window.info.activeZIndex)
  const max = zIndexList.reduce((last, cur) => last > cur ? last : cur)

  process.swapZIndex(currentWindowZIndex, max)
  
}
</script>

<style lang="css" scoped>

.leadin-animation {
  animation: leadin 0.15s cubic-bezier(.54,.01,.44,.9);
}

@keyframes leadin {
  from {
    opacity: 0;
    transform: translateY(4px);
    scale: 0.90;
    transform-origin: center;
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    scale: 1;
  }
}

</style>
