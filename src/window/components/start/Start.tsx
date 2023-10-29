import { Button, makeStyles, shorthands, tokens } from "@fluentui/react-components"
import { createContext, useContext, useState } from "react"
import { StartButton, StartPanel } from "./panel/StartPanel"
import { CalendarButton, CalendarPanel } from "./panel/CalendarPanel"
import { NavigationButton, NavigationPanel } from "./panel/NavigationPanel"
import { ProcessState } from "@/hooks/useProcessState"
import { useDispatch, useSelector } from "react-redux"
import { WorkspaceProcessState, updateStateByIdFromProcessStates } from "@/window-workspace/store/workspaceSlice"

const useStyles = makeStyles({
    root: {
        height: '44px',
        width: '100vw',
        position: 'fixed',
        bottom: '0',
        left: '0',
        ...{
            ...shorthands.padding('4px'),
            ...shorthands.borderTop(
                tokens.strokeWidthThin,
                'solid',
                tokens.colorNeutralStroke1
            ),
            ...shorthands.overflow('clip'),
        },
        backgroundColor: tokens.colorNeutralBackground1,
    },
    startBarContentLayout: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '44px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...{
            ...shorthands.padding('4px'),
            ...shorthands.borderTop(
                tokens.strokeWidthThin,
                'solid',
                tokens.colorNeutralStroke1
            ),
            ...shorthands.overflow('clip'),
        },
        backgroundColor: tokens.colorNeutralBackground1,
        '&>.left': {
            width: '100%',
            flexBasis: '3/12',
            display: 'none',
            '@media (min-width: 360px)': {
                display: 'block'
            },
        },
        '&>.center': {
            flexBasis: '6/12',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            ...{
                ...shorthands.gap('8px'),
                // ...shorthands.overflow('clip'),
            },
            '&>div': {
                height: '100%',
                aspectRatio: '1/1',
            },
        },
        '&>.right': {
            width: '100%',
            flexBasis: '3/12',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
        }
    },
    runningAppList: {
        height: '100%',
        display: 'flex',
        flexGrow: '1',
        ...{
            ...shorthands.gap('8px'),
            // ...shorthands.overflow('auto', 'hidden'),
        },
        '&>*': {
            backgroundColor: 'red',
            height: '100%',
            aspectRatio: '1/1',
            ...{
                ...shorthands.flex('none'),
                ...shorthands.overflow('none'),
            }
        }
    }
})

const StartBarContext = createContext(null)

/**
 * The apps of the running in background
 */
function RunningAppListItem({ e }: {
    e: WorkspaceProcessState
}) {
    const dispatch = useDispatch()
    return (
        <Button
            appearance="subtle"
            onClick={() => {
                dispatch(updateStateByIdFromProcessStates({
                    id: e.state.process.processId,
                    state: i => ({
                        ...i,
                        accessibility: {
                            ...i.accessibility,
                            minimize: !i.accessibility.minimize
                        },
                    })
                }))
            }}
        >1</Button>
    )
}
function RunningAppList() {
    const classes = useStyles()

    const processStates = useSelector(s => s.workspace.processStates)

    return (
        <ul className={classes.runningAppList}>
            {
                processStates.map((e, i) => <RunningAppListItem key={i} e={e}></RunningAppListItem>)
            }
        </ul>
    )
}

function StartBarContent() {
    const classes = useStyles()

    const {
        setActiveStartPanel,
        setActiveCalendarPanel,
        setActiveNavigationPanel
    } = useContext(StartBarContext)

    return (
        <>
            <div className="left">
            </div>
            
            <div className="center">
                <div className="flex h-full">
                    <StartButton setActiveStartPanel={setActiveStartPanel}></StartButton>
                    <RunningAppList></RunningAppList>
                </div>
            </div>
            
            <div className="right">
                <NavigationButton setActiveNavigationPanel={setActiveNavigationPanel}></NavigationButton>
                <CalendarButton setActiveCalendarPanel={setActiveCalendarPanel}></CalendarButton>
            </div>
        </>
    )
}


/**
 * 任务栏
 */
export function StartBar() {
    const classes = useStyles()

    const [activeStartPanel, setActiveStartPanel] = useState(false)
    const [activeNavigationPanel, setActiveNavigationPanel] = useState(false)
    const [activeCalendarPanel, setActiveCalendarPanel] = useState(false)

    return (
        <StartBarContext.Provider
            value={{
                setActiveStartPanel,
                setActiveCalendarPanel,
                setActiveNavigationPanel
            }}
        >
            <nav className={classes.startBarContentLayout}>
                <StartBarContent></StartBarContent>
            </nav>

            {
                activeStartPanel &&
                <StartPanel setActiveStartPanel={setActiveStartPanel}></StartPanel>
            }
            {
                activeNavigationPanel &&
                <NavigationPanel setActiveNavigationPanel={setActiveNavigationPanel}></NavigationPanel>
            }
            {
                activeCalendarPanel &&
                <CalendarPanel setActiveCalendarPanel={setActiveCalendarPanel}></CalendarPanel>
            }
        </StartBarContext.Provider>
    )
}
