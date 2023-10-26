import { createSlice } from "@reduxjs/toolkit"


export const ThemeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkEnabled: false,
    },
    reducers: {
        setIsDarkEnabled: (state, e) => {
            state.isDarkEnabled = e.payload
        }
    }
})

export const {
    setIsDarkEnabled
} = ThemeSlice.actions

export default ThemeSlice.reducer
