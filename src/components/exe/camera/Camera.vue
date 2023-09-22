<template>
    <PageLayout>
        <FlexLayout class="flex-col h-full w-full gap-2 items-center justify-center">
            <video
                ref="cameraVideoRef"
                class="shape-container h-full aspect-square "
            ></video>
            <fluent-button
                type="button"
                appearance="accent"
                @click="clickPhoto"
            >Take Photo</fluent-button>
        </FlexLayout>

        <FlexLayout class="gap-2 items-center flex-row flex-wrap">
            <div ref="cameraResultListRef" class="flex-none">

            </div>
        </FlexLayout>
    </PageLayout>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';

const cameraVideoRef = ref()
const cameraResultListRef = ref<HTMLElement>()
const clickPhoto = () => {
    let canvas = document.createElement('canvas')
    canvas.getContext('2d').drawImage(cameraVideoRef.value, 0, 0, canvas.width, canvas.height)
    canvas.style.width = '8rem'
    canvas.style.aspectRatio = '1 / 1'
    cameraResultListRef.value.appendChild(canvas)    
}

onMounted(() => {
    if (navigator && navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: "user", 
                width: 300,
                height: 300 
            }
        }).then((stream) => {
            cameraVideoRef.value.srcObject = stream
            cameraVideoRef.value.onloadedmetadata = () => cameraVideoRef.value.play()
        }).catch(() => {
            console.log('Unknown error.');
        })
    } else {
        console.log("camera API is not supported by your browser")
    }

})

onBeforeUnmount(() => {
    cameraVideoRef.value.onloadedmetadata = null
})
onUnmounted(() => {
})


</script>
