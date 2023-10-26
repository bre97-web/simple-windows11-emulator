import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlice } from "./themeSlice";
import { AccountSlice } from "./accountSlice";

export const Store = configureStore({
    reducer: {
        theme: ThemeSlice.reducer,
        account: AccountSlice.reducer,
    }
})

