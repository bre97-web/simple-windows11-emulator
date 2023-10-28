import { configureStore } from "@reduxjs/toolkit"
import { ThemeSlice } from "./themeSlice"
import { AccountSlice } from "./accountSlice"
import { SystemSlice } from "./systemSlice"
import { ProcessSlice } from "./processSlice"

export const Store = configureStore({
    reducer: {
        theme: ThemeSlice.reducer,
        account: AccountSlice.reducer,
        system: SystemSlice.reducer,
        process: ProcessSlice.reducer,
    }
})
