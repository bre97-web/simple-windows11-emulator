import { ReactElement } from "react"
import { Provider } from "react-redux"
import { WorkspaceStore } from '@/window-workspace/store/workspaceStore'

/**
 * WindowWorkspaceGroupProvider.tsx
 * 
 * 此文仅向外公开了WorkspaceStore，通过WindowWorkspaceGroupProvider可以获取到
 * store中存储的state和setState。
 */

export function WindowWorkspaceGroupProvider({ children }: {
    children: ReactElement
}) {
    return (
        <Provider
            store={WorkspaceStore}
        >
            { children }
        </Provider>
    )
}

