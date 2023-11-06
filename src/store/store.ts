import { configureStore } from "@reduxjs/toolkit"
import { ThemeSlice } from "./themeSlice"
import { AccountSlice } from "./accountSlice"
import { SystemSlice } from "./systemSlice"
import { WorkspaceSlice } from "./workspaceSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const Store = configureStore({
    reducer: {
        theme: ThemeSlice.reducer,
        account: AccountSlice.reducer,
        system: SystemSlice.reducer,
        workspace: WorkspaceSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

/**
 * Please use those to replace useSelector and usePatch
 */
export const useSystemDispatch: () => AppDispatch = useDispatch
export const useSystemSelector: TypedUseSelectorHook<RootState> = useSelector
