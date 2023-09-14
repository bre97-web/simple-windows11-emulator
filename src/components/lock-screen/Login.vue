<template>
    <div class="relative full-screen flex flex-col gap-16 items-center justify-center">
        <ProfileAvatar></ProfileAvatar>

        <ProfileName></ProfileName>
    
        <form class="flex items-center relative">

            <fluent-text-field autofocus type="password"
                @input="(e: Event) => state.password = (e.target as EventTarget & Input).value" appearance="filled"
                @keyup.enter="login"
                placeholder="Password"
            ></fluent-text-field>

            <fluent-button @click="login" class="absolute right-0 z-[1] p-0.5 grid place-content-center">
                <span class="material-symbols-outlined md-icon">arrow_forward</span>
            </fluent-button>

        </form>
    
        <div v-if="!state.pending">
            <LabelLarge v-if="state.isError">Typed password is incorrect</LabelLarge>
            <LabelLarge v-else-if="user.activityState.isLocked && !state.isError && state.typed">Welcome</LabelLarge>
        </div>
        <fluent-progress-ring v-else></fluent-progress-ring>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useUserStore } from '@/store/UserStore';
import { Input } from '@/types/Input'
import ProfileAvatar from './ProfileAvatar.vue';
import ProfileName from './ProfileName.vue';


const user = useUserStore()

const state = reactive({
    password: '',
    pending: false,
    isError: false,
    typed: false
})
const setPending = async (e: boolean) => {
    state.pending = e
}
const delay = async (event: () => void) => new Promise(async () => await setTimeout(() => {
    event()
}, 500))

const login = async () => {
    state.typed = true
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

<style scoped></style>