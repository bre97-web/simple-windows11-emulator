import { WindowWorkspaceGroupProvider } from "@/window-workspace/components/WindowWorkspaceGroupProvider"
import { WindowWorkspaceProvider } from "@/window-workspace/components/WindowWorkspaceProvider"
import { ReactElement, createContext } from "react"
import ReactDOM from "react-dom/client"

export type InfoProperties = {

    title: string

    icon: string

    /**
     * z-index
     */
    activeZIndex: number

}
export type SizeProperties = {
    width: number
    height: number
}
export type WindowProperties = {

    /**
     * For template of components
     */
    info: InfoProperties

    position: PositionProperties

    size: SizeProperties

}
export type PositionProperties = {
    x: number
    y: number
}
export type AccessibilityProperties = {
    maximizable: boolean
    minimizable: boolean

    /**
     * Window maximize and minimize
     */
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

}
export type ProcessProperties = {

    /**
     * The 'runningInBackgorund' and 'minimize' are not the same
     */
    runningInBackground: boolean

    /**
     * Unique process id
     */
    processId: number

}

export type ProcessState = {

    window: WindowProperties

    accessibility: AccessibilityProperties

    process: ProcessProperties

}

let processHandler: number = 0
function createProcessHandle(): number {
    return processHandler++
}

export function useProcessState(
    infoProps: {
        title?: string,
        icon?: string
    } = {
            title: 'Untitled',
            icon: ''
        },
    positionProps: {
        x?: number,
        y?: number,
    } = {
            x: 0,
            y: 0,
        },
    sizeProps: {
        width?: number,
        height?: number,
    } = {
            width: 300,
            height: 400,
        },
    accessibilityProps: {
        maximizable?: boolean,
        minimizable?: boolean,
        fullscreen?: boolean,
    } = {
            maximizable: true,
            minimizable: true,
            fullscreen: false,
        },
    processProps: {
        runningInBackground: boolean,
    } = {
            runningInBackground: false,
        },
) {
    return ({
        window: {
            info: {
                title: infoProps.title,
                icon: infoProps.icon,
                activeZIndex: createProcessHandle(),
            },
            position: {
                x: positionProps.x,
                y: positionProps.y,
            },
            size: {
                width: sizeProps.width,
                height: sizeProps.height,
            },
        },
        accessibility: {
            maximizable: accessibilityProps.maximizable,
            minimizable: accessibilityProps.minimizable,
            fullscreen: accessibilityProps.fullscreen,
            focus: false,
            active: false,
            maximize: false,
            minimize: false,
        },
        process: {
            runningInBackground: processProps.runningInBackground,
            processId: createProcessHandle(),
        },
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
            <WindowWorkspaceGroupProvider>
                <WindowWorkspaceProvider
                    unmount={unmount}
                    StateContext={StateContext}
                    state_copy={state}
                >
                    {children}
                </WindowWorkspaceProvider>
            </WindowWorkspaceGroupProvider>
        )
    }

    const instance = ReactDOM.createRoot(createDOM()!)

    return {
        mount,
        unmount,
    }
}