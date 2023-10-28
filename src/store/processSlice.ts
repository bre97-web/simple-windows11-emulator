import { createSlice } from "@reduxjs/toolkit"

export const ProcessSlice = createSlice({
    name: 'process',
    initialState: {
        processes: []
    },
    reducers: {
        pushProcess: (s, e) => {
            s.processes.push(e.payload)
        }
    },
})

export const {
    pushProcess,
} = ProcessSlice.actions

export default ProcessSlice.reducer
