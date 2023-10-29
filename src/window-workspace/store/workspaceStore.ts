import { configureStore } from "@reduxjs/toolkit"
import { WorkspaceSlice } from "./workspaceSlice"


export const WorkspaceStore = configureStore({
    reducer: {
        workspace: WorkspaceSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
})