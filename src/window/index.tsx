import { ReactElement } from "react";
import { LockScreen } from "./components/lock-screen/LockScreen";
import { useSelector } from "react-redux";
import { Desktop } from "./components/desktop/Desktop";
import { StartBar } from "./components/start/Start";
import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components";

function DesktopWindow({ children }: {
    children: ReactElement
}) {
    return (
        <div className="overflow-clip w-screen h-screen">
            { children }
        </div>
    )
}

export function Window() {

    const userIsLogIn = useSelector(state => state.account.isLogIn)
    const isDarkEnabled = useSelector(state => state.theme.isDarkEnabled)

    return (
        <FluentProvider theme={isDarkEnabled ? webDarkTheme : webLightTheme}>
            <DesktopWindow>
                {
                    userIsLogIn ?
                    <LockScreen></LockScreen> :
                    <>
                        <Desktop></Desktop>
                        <StartBar></StartBar>
                    </>
                }
                
            </DesktopWindow>
        </FluentProvider>
    )
}