import { Store } from "@/store/store"
import { WindowProvider } from "@/window-workspace/components/WindowProvider"
import { useProcessHandle } from '@/hooks/useProcessHandle'
import { Provider } from "react-redux"
import { ReactElement, StrictMode, createContext } from "react"
import ReactDOM from "react-dom/client"

export type ProcessState = {

    /**
     * 窗口标题和图标
     */
    title: string
    icon: ReactElement

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

    /**
     * 当程序需要被关闭时，修改requestClose为true
     */
    requestClose: boolean
    closing: boolean
}

/**
 * 这将创建一个完全为默认值的ProcessState对象
 */
export function makeDefaultProcessState(): ProcessState {
    return ({
        title: 'Untitled',
        icon: <></>,
        activeZIndex: 0,
        x: 10,
        y: 10,
        width: 300,
        height: 300,
        maximizable: true,
        minimizable: true,
        fullscreen: false,
        focus: false,
        active: false,
        maximize: false,
        minimize: false,
        runningInBackground: true,
        processId: useProcessHandle(),
        requestClose: false,
        closing: false
    })
}
export function makeProcessState(props: ProcessState) {
    return props
}

export type ProcessContext = React.Context<{
    state: ProcessState
    setState: (value: React.SetStateAction<ProcessState>) => void
    unmount: () => void
    children: ReactElement
}>


interface ProcessReactRootComponentInterface {
    mount: () => void
    unmount: () => void
}
export interface ProcessInterface extends ProcessReactRootComponentInterface {
}

class ProcessClass implements ProcessInterface {

    private readonly context: ProcessContext = createContext(null)
    private readonly instance: ReactDOM.Root
    
    constructor(
        private readonly state: ProcessState,
        private readonly children: ReactElement,
    ) {
        const target = document.createElement('div')
        document.getElementById('window-workspace').appendChild(target)
        this.instance = ReactDOM.createRoot(target!)
    }

    public mount() {
        this.instance.render(
            <StrictMode>
                <Provider store={Store}>
                    <WindowProvider
                        unmount={() => this.unmount()}
                        state_copy={this.state}
                        StateContext={this.context}
                    >
                        { this.children }
                    </WindowProvider>
                </Provider>
            </StrictMode>
        )
    }
    public unmount() {
        this.instance.unmount()
    }

}

export function useProcess(state: ProcessState, children: ReactElement): ProcessClass {
    const process = new ProcessClass(
        state,
        children
    )
        
    return process
}
