<template>
    <div class="relative full-screen flex flex-col gap-16 items-center justify-center">
        <ProfileAvatar></ProfileAvatar>

        <ProfileName></ProfileName>
    
        <form class="flex items-center relative">

            <fluent-text-field
                autofocus
                type="password"
                @input="(e: Event) => state.password = (e.target as EventTarget & Input).value" appearance="filled"
                @keyup.enter="login"
                placeholder="Password"
            ></fluent-text-field>

            <fluent-button @click="login" class="absolute right-0 z-[1] p-0.5 grid place-content-center">
                <Icon>arrow_forward</Icon>
            </fluent-button>

        </form>
    
        <div v-if="!state.pending">
            <md-text type="label-large" v-if="state.isError">Typed password is incorrect</md-text>
            <md-text type="label-large" v-else-if="system.getSystemIsLocked && state.isTyped">Welcome</md-text>
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
import { useSystemStore } from '@/store/SystemStore';

const system = useSystemStore()
const user = useUserStore()

const state = reactive({
    password: '',
    pending: false,
    isError: false,
    isTyped: false
})
const setPending = async (e: boolean) => {
    state.pending = e
}
const setIsError = async (e:boolean) => {
    state.isError = e
} 
const setIsTyped = async (e: boolean) => {
    state.isTyped = e
}
const delay = async (event: () => void) =>  await new Promise(() => setTimeout(() => {
    event()
}, 500))

const login = async () => {
    setIsTyped(true)
    setPending(true)
    setIsError(false)

    if(state.password === user.accountState.password) {
        await delay(() => {
            setPending(false)
            user.setIsLogout(false)
            system.setIsLocked(false)
        })
    }
    await delay(() => {
        setIsError(true)
        setPending(false)
    })
}
</script>

<style scoped></style>