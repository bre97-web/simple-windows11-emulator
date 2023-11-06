import { WindowWorkspaceGroupProvider } from "@/window-workspace/components/WindowWorkspaceGroupProvider"
import { WindowWorkspaceProvider } from "@/window-workspace/components/WindowWorkspaceProvider"
import { ReactElement, StrictMode, createContext } from "react"
import ReactDOM from "react-dom/client"

export type ProcessState = {

    /**
     * 窗口标题和图标
     */
    title: string
    icon: string | ReactElement

    /**
     * 窗口纵轴，用于确定窗口的层级
     */
    activeZIndex: number

    width: number
    height: number
    x: number
    y: number

    /**
     * Window maximize and minimize
     */
    maximizable: boolean
    minimizable: boolean
    maximize: boolean
    minimize: boolean

    /**
     * ?
     */
    focus: boolean
    /**
     * It is active while mousedown
     */
    active: boolean
    fullscreen: boolean

    /**
     * The 'runningInBackgorund' and 'minimize' are not the same
     */
    runningInBackground: boolean

    /**
     * Unique process id
     */
    processId: number

    closing: boolean
}

let processHandler: number = 0
function createProcessHandle(): number {
    return processHandler++
}

export function useProcessState(
    title = '',
    icon = '',
    width = 400,
    height = 400,
    x = 10,
    y = 10,
): ProcessState {
    return ({
        title: title,
        icon: icon,
        activeZIndex: createProcessHandle(),
        x: x,
        y: y,
        width: width,
        height: height,
        maximizable: true,
        minimizable: true,
        fullscreen: false,
        focus: false,
        active: false,
        maximize: false,
        minimize: false,
        runningInBackground: true,
        processId: createProcessHandle(),
        closing: false
    })
}

export type StateContextType = React.Context<{
    state: ProcessState
    setState: (value: React.SetStateAction<ProcessState>) => void
    unmount: () => void
    children: ReactElement
}>
export type UseProcessType = {
    mount: () => void
    unmount: () => void
}

export function useProcess(state: ProcessState, children: ReactElement): UseProcessType {

    const createDOM = () => {
        const target = document.createElement('div')
        document.getElementById('window-workspace').appendChild(target)
        return target
    }
    const unmount = () => instance.unmount()
    const mount = () => {
        const StateContext = createContext(null)
        instance.render(
            <StrictMode>
                <WindowWorkspaceGroupProvider>
                    <WindowWorkspaceProvider

                        unmount={unmount}
                        StateContext={StateContext}
                        state_copy={state}
                    >
                        {children}
                    </WindowWorkspaceProvider>
                </WindowWorkspaceGroupProvider>
            </StrictMode>
        )
    }

    const instance = ReactDOM.createRoot(createDOM()!)

    return {
        mount,
        unmount,
    }
}