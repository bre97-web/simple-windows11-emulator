import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { Store } from "./store/store"
import { Provider } from 'react-redux'
import { Window } from "./window"
import '@/assets/css/tailwind.css'
import { Mask } from "./window-screen-mask"

ReactDOM.createRoot(document.getElementById('window')!).render(
    <StrictMode>
        <Provider store={Store}>
            <Window></Window>
        </Provider>
    </StrictMode>
)

const WindowMaskInstance = ReactDOM.createRoot(document.getElementById('window-screen-mask')!)
WindowMaskInstance.render(
    <StrictMode>
        <Provider store={Store}>
            <Mask></Mask>
        </Provider>
    </StrictMode>
)