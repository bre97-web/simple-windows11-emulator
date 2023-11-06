import { ReactElement, useEffect } from "react"
import { LockScreen } from "./components/lock-screen/LockScreen"
import { useSelector } from "react-redux"
import { Desktop } from "./components/desktop/Desktop"
import { StartBar } from "./components/start/Start"
import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components"
import { Shutdown } from "./components/shutdown/Shutdown"

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

    const userIsLogIn = useSelector(state => state.account.isLogIn)
    const isDarkEnabled = useSelector(state => state.theme.isDarkEnabled)
    const requestToShutdown = useSelector(state => state.system.requestToShutdown)
    const readyToShutdown = useSelector(state => state.system.readyToShutdown)

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
                                userIsLogIn ?
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