import { defineStore } from "pinia";

export const useUserStore = defineStore('user_store', {
    state: () => ({
        accountState: {
            name: 't',
            password: 'p',
        },
        activityState: {
            isLocked: true
        }
    }),
    actions: {
        logout() {
            this.activityState.isLocked = true
        }
    },
    persist: true,
})
