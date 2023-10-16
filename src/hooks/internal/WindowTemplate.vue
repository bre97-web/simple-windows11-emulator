<template>
  <div
    ref="windowRef"
    @mousedown="focusAndActive"
    @mouseover="emits('focus')"
    @mouseout="emits('unfocus')"
    class="select-none fixed overflow-hidden transition-all active:transition-none"
    :class="classes"
    :style="styles"
  >
    <FlexLayout class="rounded-container w-full h-full flex-col overflow-clip border">

      <header v-show="!props.getProcessStateInstance().accessibility.fullscreen" class="flex-none select-none w-full h-8 bg-white/75 backdrop-blur-lg">
        <div class="w-full h-full flex items-center justify-between px-1">
          <div
            @mousedown="emits('gragwindow', $event)"
            class="h-full flex items-center justify-start w-full text-ellipsis overflow-clip"
          >
            <div class="flex-none h-full aspect-square scale-75 grid place-content-center">
              <Icon>{{ props.getProcessStateInstance().window.info.icon }}</Icon>
            </div>
            <h1 class="w-full whitespace-nowrap overflow-clip">{{ props.getProcessStateInstance().window.info.title }}</h1>
          </div>

          <nav class="flex-none w-fit h-full flex items-center justify-end">
            <IconButton
              v-if="props.getProcessStateInstance().accessibility.minimizable"
              @click="emits('minimize')"
              has-hover
              has-active
            >
              <Icon class="scale-75">minimize</Icon>
            </IconButton>

            <IconButton
              v-if="props.getProcessStateInstance().accessibility.maximizable"
              @click="emits('maximize')"
              has-hover
              has-active
            >
              <Icon class="scale-75">check_box_outline_blank</Icon>
            </IconButton>

            <IconButton
              @click="emits('close')"
              has-hover
              has-active
              type="error"
            >
              <Icon class="scale-75">close</Icon>
            </IconButton>
          </nav>
        </div>
      </header>

      <main class="relative w-full h-full backdrop-blur-lg bg-white/75 overflow-auto">
        <slot></slot>
      </main>
    </FlexLayout>

  </div>
</template>

<script setup lang="ts">
import { useProcessStore } from '@/store/ProcessStore';
import { ProcessState } from '@/hooks/useProcessState';
import { computed, onMounted, onUnmounted } from 'vue';

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
  (event: 'fullscreen'): void
  (event: 'unFullscreen'): void
  (event: 'gragwindow', e: MouseEvent): boolean
  (event: 'changeWindowSize'): void
}>()

const process = useProcessStore()

const focusAndActive = () => {
  process.cleanActive()
  process.cleanFocus()
  emits('focus')
  emits('active')
  process.setTopZIndex(process.getProcessByProcessId(props.getProcessStateInstance().process.processId))
}

const classes = computed(() => {
  const instance: ProcessState = props.getProcessStateInstance()
  return [
    instance.accessibility.active ? 'shadow-lg' : '',
    instance.accessibility.minimize ? 'hidden-window ' : 'open-window',
    instance.accessibility.fullscreen ? '' : 'resize',
  ]
})
const styles = computed(() => {
  const instance: ProcessState = props.getProcessStateInstance()

  return ({
    'left' : (instance.accessibility.maximize ? '0' : instance.window.position.x) + 'px',
    'top' : (instance.accessibility.maximize ? '0' : instance.window.position.y) + 'px',
    'width': instance.accessibility.maximize ? '100%' : (instance.window.size.width + 'px'),
    'height': instance.accessibility.maximize ? '100%' : (instance.window.size.height + 'px'),
    'z-index': instance.accessibility.fullscreen ? '999' : instance.window.info.activeZIndex + 10,
    'padding-bottom': instance.accessibility.maximize ? instance.accessibility.fullscreen ? '0' : '3rem' : '0',
  })
})

var keys: string[] = []
const toggleFullscreen = (e: KeyboardEvent) => {
  if(!props.getProcessStateInstance().accessibility.active) return 

  if(keys.length === 0) {
    keys[0] = e.code
    return 
  } else if(keys.length === 1) {
    keys[1] = e.code
  } else if(e.code !== keys[1]) {
    keys.shift()
    keys[1] = e.code
  }

  keys = Array.from(new Set(keys))
  
  if(keys.length !== 2) return 
  if(!['ShiftLeft', 'ShiftRight'].includes(keys[0])) return

  if(keys[1] === 'KeyK') {
    if(props.getProcessStateInstance().accessibility.fullscreen) {
      emits('unFullscreen')
    } else {
      emits('fullscreen')
    }
  } else if(keys[1] === 'ArrowUp') {
    emits('maximize')
  } else if(keys[1] === 'ArrowDown') {
    emits('minimize')
  } else if(keys[1] === 'F4') {
    emits('close')
  }

  keys = []
}

onMounted(() => {
  focusAndActive()
  document.addEventListener('keyup', toggleFullscreen)
})
onUnmounted(() => {
  document.removeEventListener('keyup', toggleFullscreen)
})
</script>
