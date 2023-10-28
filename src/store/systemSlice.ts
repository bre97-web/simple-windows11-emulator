import { createSlice } from "@reduxjs/toolkit"

export const SystemSlice = createSlice({
    name: 'system',
    initialState: {
        requestToShutdown: false,
        readyToShutdown: false,
    },
    reducers: {
        setRequestToShutdown: (state, e) => {
            state.requestToShutdown = e.payload
        },
        setReadyToShutdown: (state, e) => {
            state.readyToShutdown = e.payload
        },
    },
})

export default SystemSlice.reducer

export const {
    setRequestToShutdown,
    setReadyToShutdown
} = SystemSlice.actions
