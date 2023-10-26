import { createSlice } from "@reduxjs/toolkit"

export const AccountSlice = createSlice({
    name: 'account',
    initialState: {
        currentAccount: {
            name: 'CURRENT USER',
            password: 'p',
        },
        isLogIn: false,
    },
    reducers: {
        setIsLogIn: (state, e) => {
            state.isLogIn = e.payload
        }
    }
})

export const { setIsLogIn } = AccountSlice.actions

export default AccountSlice.reducer
