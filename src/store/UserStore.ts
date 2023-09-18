import { defineStore } from "pinia";

export const useUserStore = defineStore('user_store', {
    state: () => ({
        accountState: {
            name: 't',
            password: 'p',
        },
        isLogout: true,
    }),
    getters: {
        getUserAccountState: (state) => state.accountState,
        getUserIsLogout: (state) => state.isLogout,
    },
    actions: {
        setIsLogout(e: boolean) {
            this.isLogout = e
        }
    },
    persist: true,
})
