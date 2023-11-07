import { ReactElement, useEffect } from "react"
import { LockScreen } from "./components/lock-screen/LockScreen"
import { Desktop } from "./components/desktop/Desktop"
import { StartBar } from "./components/start/Start"
import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components"
import { Shutdown } from "./components/shutdown/Shutdown"
import { useSystemSelector } from "@/store/store"

function DesktopWindow({ children }: {
    children: ReactElement
}) {
    return (
        <div className="overflow-clip w-screen h-screen">
            {children}
        </div>
    )
}

export function Window() {

    const userIsLogIn = useSystemSelector(state => state.account.isLogIn)
    const isDarkEnabled = useSystemSelector(state => state.theme.isDarkEnabled)
    const requestToShutdown = useSystemSelector(state => state.system.requestToShutdown)
    const readyToShutdown = useSystemSelector(state => state.system.readyToShutdown)

    useEffect(() => {
        if (readyToShutdown) {
            // instance.unmount()
        }
    }, [readyToShutdown])

    return (
        <>
            {
                !readyToShutdown &&
                <FluentProvider theme={isDarkEnabled ? webDarkTheme : webLightTheme}>
                    <DesktopWindow>
                        <>
                            {
                                !userIsLogIn ?
                                    <LockScreen></LockScreen> :
                                    <>
                                        <Desktop></Desktop>
                                        <StartBar></StartBar>
                                    </>
                            }

                            {
                                requestToShutdown && <Shutdown></Shutdown>
                            }
                        </>
                    </DesktopWindow>
                </FluentProvider>
            }

        </>
    )
}