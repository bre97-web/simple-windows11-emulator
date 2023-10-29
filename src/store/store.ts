import { configureStore } from "@reduxjs/toolkit"
import { ThemeSlice } from "./themeSlice"
import { AccountSlice } from "./accountSlice"
import { SystemSlice } from "./systemSlice"

export const Store = configureStore({
    reducer: {
        theme: ThemeSlice.reducer,
        account: AccountSlice.reducer,
        system: SystemSlice.reducer,
    }
})
