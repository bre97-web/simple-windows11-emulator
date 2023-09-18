<template>
  <div
    ref="windowRef"
    class="z-0 select-none shape-container overflow-clip fixed border-[1.5px] border-black/20 transform-none duration-0"
  >
    <header class="select-none w-full h-8 bg-white/75 backdrop-blur-xl">
      <div class="w-full h-full flex items-center justify-between">
        <h1 class="h-full px-2 flex items-center w-full min-w-[32px] text-ellipsis overflow-clip">{{ props.title }}</h1>

        <nav class="w-fit h-full flex items-center justify-end">
          <div class="w-full h-full icon-has-hover">
            <div class="icon icon-has-active px-2 md:px-4 h-full">
              <md-icon>minimize</md-icon>
            </div>
          </div>

          <div @click="maximizeWindow" class="w-full h-full icon-has-hover">
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

    <main class="h-full max-h-min backdrop-blur-xl bg-white/75">
      <slot></slot>
    </main>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  title: string
}>()
const emits = defineEmits<{
  (event: 'close'): void
}>()

const windowRef = ref()

const maximizeWindow = () => {
  windowRef.value.classList.toggle('full-screen')
  windowRef.value.style.left = '0px'
  windowRef.value.style.top = '0px'
}

onMounted(() => {
  windowRef.value.style.left = '16px'
  windowRef.value.style.top = '16px'

  const position = {
    x: 0,
    y: 0
  }

  windowRef.value.children.item(0).children.item(0).children.item(0).onmousedown = (e: MouseEvent) => {
    var e = e

    // 计算鼠标距离弹出框内的位置
    position.x = e.clientX - windowRef.value.offsetLeft
    position.y = e.clientY - windowRef.value.offsetTop

    document.onmousemove = (e: MouseEvent) => {
      var e = e

      // 弹出框dialog距离窗口左上角的水平和纵向距离
      var currentDialogDisX = e.clientX - position.x
      var currentDialogDisY = e.clientY - position.y

      if (currentDialogDisX < 0) {
        currentDialogDisX = 0
      } else if (currentDialogDisX > document.documentElement.clientWidth - windowRef.value.offsetWidth) {
        currentDialogDisX = document.documentElement.clientWidth - windowRef.value.offsetWidth
      }

      if(currentDialogDisY < 0) {
        currentDialogDisY = 0
      } else if (currentDialogDisY > document.documentElement.clientHeight - windowRef.value.offsetHeight) {
        currentDialogDisY = document.documentElement.clientHeight - windowRef.value.offsetHeight
      }

      windowRef.value.style.left = currentDialogDisX + 'px'
      windowRef.value.style.top = currentDialogDisY + 'px'
          }

      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }

      return false
  }
})

</script>
