import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { Store } from "./store/store"
import { Provider } from 'react-redux'
import { Window } from "./window"
import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import '@/assets/css/tailwind.css'

ReactDOM.createRoot(document.getElementById('window')!).render(
    <StrictMode>
        <FluentProvider theme={webLightTheme}>
            <Provider store={Store}>
                <Window></Window>
            </Provider>
        </FluentProvider>
    </StrictMode>
)