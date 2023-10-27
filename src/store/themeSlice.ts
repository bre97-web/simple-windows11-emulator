import { createSlice } from "@reduxjs/toolkit"


export const ThemeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkEnabled: false,
        brightness: 100,
        isNightlightEnabled: false
    },
    reducers: {
        setIsDarkEnabled: (state, e) => {
            state.isDarkEnabled = e.payload
        },
        setBrightness: (state, e) => {
            state.brightness = e.payload
        },
        setIsNightlightEnabled: (state, e) => {
            state.isNightlightEnabled = e.payload
        }
    }
})

export const {
    setIsDarkEnabled,
    setBrightness,
    setIsNightlightEnabled
} = ThemeSlice.actions

export default ThemeSlice.reducer
