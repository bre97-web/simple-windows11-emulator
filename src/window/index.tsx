import { ReactElement } from "react";
import { LockScreen } from "./components/lock-screen/LockScreen";
import { useSelector } from "react-redux";
import { Desktop } from "./components/desktop/Desktop";

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

    return (
        <DesktopWindow>
            {
                !userIsLogIn ?
                <LockScreen></LockScreen> :
                <Desktop></Desktop>
            }
            
        </DesktopWindow>
    )
}