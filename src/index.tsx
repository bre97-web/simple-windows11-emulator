import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { Store } from "./store/store"
import { Provider } from 'react-redux'
import { Window } from "./window"
import '@/assets/css/tailwind.css'
import { Mask } from "./window-screen-mask"
import { useProcess, useProcessState } from "./hooks/useProcessState"
import { Settings } from "./window-workspace/components/settings/Settings"

/**
 * The Core DOM
 */
const WindowInstance = ReactDOM.createRoot(document.getElementById('window')!)
WindowInstance.render(
    <StrictMode>
        <Provider store={Store}>
            <Window></Window>
        </Provider>
    </StrictMode>
)

/**
 * The System mask: brightness, nightlight, ...
 */
const WindowMaskInstance = ReactDOM.createRoot(document.getElementById('window-screen-mask')!)
WindowMaskInstance.render(
    <StrictMode>
        <Provider store={Store}>
            <Mask></Mask>
        </Provider>
    </StrictMode>
)

/**
 * Default Actions
 */
const state = useProcessState(
    {
        icon: '',
        title: 'D'
    },
    {
        x: 0,
        y: 0,
    },
    {
        height: 400,
        width: 400,
    },
)
const app = useProcess(state, <Settings></Settings>)
app.mount()