<template>
    <div class="full-screen flex flex-col items-center justify-center gap-16 backdrop-blur-md">

        <div class="relative">
            <div class="avatar-panel bg-red-500 text-white flex-none font-semibold text-8xl grid place-content-center">{{ user.accountState.name[0] }}</div>
        </div>
        <div class="drop-shadow-md shadow-black text-4xl text-black/25">{{ user.accountState.name }}</div>


        <div class="space-y-8 flex flex-col items-center">
            
            <form class="flex items-center relative w-fit">
                
                <fluent-text-field
                    autofocus
                    type="password"
                    @input="(e: Event) => state.password = (e.target as EventTarget & Input).value"
                    appearance="filled"
                    placeholder="Password"
                ></fluent-text-field>

                <fluent-button
                    @click="login"
                    class="absolute right-0 z-[1] p-0.5 grid place-content-center"
                >
                    <span class="material-symbols-outlined md-icon">arrow_forward</span>
                </fluent-button>

            </form>

            <div v-if="!state.pending">
                <LabelLarge v-if="state.isError">Typed password is incorrect</LabelLarge>
                <LabelLarge v-else-if="user.activityState.isLocked && !state.isError">Welcome</LabelLarge>
            </div>
            <fluent-progress-ring v-else></fluent-progress-ring>
        </div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useUserStore } from '@/store/UserStore';
import { Input } from '@/types/Input'


const user = useUserStore()

const state = reactive({
    password: '',
    pending: false,
    isError: false,
})
const setPending = async (e: boolean) => {
    state.pending = e
}
const delay = async (event: () => void) => new Promise(async () => await setTimeout(() => {
    event()
}, 500))

const login = async () => {
    state.pending = true
    state.isError = false

    if(state.password === user.accountState.password) {
        await delay(() => {
            user.activityState.isLocked = false
            setPending(false)
        })
    }
    await delay(() => {
        state.isError = true
        setPending(false)
    })
}
</script>

<style scoped>

</style>