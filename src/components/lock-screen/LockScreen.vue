<template>
    <div class="full-screen flex flex-col items-center justify-center gap-16 backdrop-blur-md">

        <div class="avatar-panel bg-red-500"></div>

        <div class="space-y-8 flex flex-col items-center">
            <form class="flex items-center relative w-fit">
                <fluent-text-field @input="$event => state.password = $event.target.value" appearance="filled" placeholder="Password">
                </fluent-text-field>
                <fluent-button
                    @click="login"
                    class="absolute right-0 z-[1] p-0.5 grid place-content-center"
                >
                    <span class="material-symbols-outlined md-icon">
                        arrow_forward
                    </span>
                </fluent-button>
            </form>
            <fluent-progress-ring v-show="state.pending"></fluent-progress-ring>
        </div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const state = reactive({
    password: '',
    pending: false
})
const setPending = async (e: boolean) => {
    state.pending = e
}
const delaySetPending = async (e: boolean) => new Promise(async () => await setTimeout(() => {
    setPending(e)
}, 500))

const login = async () => {
    state.pending = true

    if(1) {
        
    }

    await delaySetPending(false)
}
</script>

<style scoped>

</style>