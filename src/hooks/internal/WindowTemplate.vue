<template>
  <div
    ref="windowRef"
    @mousedown="() => {
      process.cleanActive()
      process.cleanFocus()
      emits('focus')
      emits('active')
      swapZIndex()
    }"
    @mouseover="emits('focus')"
    @mouseout="() => {
      emits('unfocus')
    }"
    class="select-none fixed leadin-animation resize overflow-hidden transition-all active:transition-none"
    :class="[
      props.getProcessStateInstance().accessibility.active ? 'shadow-lg' : '',
      props.getProcessStateInstance().accessibility.minimize ? 'opacity-0 scale-0 translate-y-full select-none pointer-events-none -z-[99999]' : '',
    ]"
    :style="{
      'left' : props.getProcessStateInstance().accessibility.maximize ? '0' : props.getProcessStateInstance().window.position.x + 'px',
      'top' : props.getProcessStateInstance().accessibility.maximize ? '0' : props.getProcessStateInstance().window.position.y + 'px',
      'width': props.getProcessStateInstance().accessibility.maximize ? '100%' : props.getProcessStateInstance().window.size.width + 'px',
      'height': props.getProcessStateInstance().accessibility.maximize ? '100%' : props.getProcessStateInstance().window.size.height + 'px',  
      'z-index': props.getProcessStateInstance().window.info.activeZIndex + 1000,
      'padding-bottom': props.getProcessStateInstance().accessibility.maximize ? '3rem' : '0',
    }"
  >
    <FlexLayout class="shape-container w-full h-full flex-col overflow-clip border-[1.5px] border-black/20">

      <header class="flex-none select-none w-full h-8 bg-white/75 backdrop-blur-xl">
        <div class="w-full h-full flex items-center justify-between">
          <div
            @mousedown="emits('gragwindow', $event)"
            class="h-full flex items-center justify-start w-full text-ellipsis overflow-clip"
          >
            <div class="flex-none h-full aspect-square scale-75 grid place-content-center">
              <md-icon>{{ props.getProcessStateInstance().window.info.icon }}</md-icon>
            </div>
            <h1 class="w-full whitespace-nowrap overflow-clip">{{ props.getProcessStateInstance().window.info.title }}</h1>
          </div>

          <nav class="flex-none w-fit h-full flex items-center justify-end">
            <div
              v-if="props.getProcessStateInstance().accessibility.minimizable"
              @click="emits('minimize')"
              class="w-full h-full icon-has-hover"
            >
              <div class="icon icon-has-active px-2 h-full scale-75">
                <md-icon>minimize</md-icon>
              </div>
            </div>

            <div
              v-if="props.getProcessStateInstance().accessibility.maximizable"
              @click="emits('maximize')"
              class="w-full h-full icon-has-hover"
            >
              <div class="icon icon-has-active px-2 h-full scale-75">
                <md-icon>check_box_outline_blank</md-icon>
              </div>
            </div>

            <div
              @click="() => {
                process.killProcessByProcessId(props.getProcessStateInstance().process.processId)
              }"
              class="w-full h-full icon-has-hover"
              type="error"
            >
              <div class="icon icon-has-active px-2 h-full scale-75">
                <md-icon>Close</md-icon>
              </div>
            </div>

          </nav>
        </div>
      </header>

      <main class="relative w-full h-full backdrop-blur-xl bg-white/75 overflow-auto">
        <slot></slot>
      </main>
    </FlexLayout>

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
  (event: 'changeWindowSize'): void
}>()


const process = useProcessStore()

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
