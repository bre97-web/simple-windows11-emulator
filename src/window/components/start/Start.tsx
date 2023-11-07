import { makeStyles, shorthands, tokens } from "@fluentui/react-components"
import { ReactElement, createContext, useContext, useState } from "react"
import { StartButton, StartPanel } from "./panel/StartPanel"
import { CalendarButton, CalendarPanel } from "./panel/CalendarPanel"
import { NavigationButton, NavigationPanel } from "./panel/NavigationPanel"
import { WorkspaceProcessState, updatePropertyForAllProcessState, updateStateByIdFromProcessStates } from "@/store/workspaceSlice"
import { useSystemDispatch, useSystemSelector } from "@/store/store"

const useStyles = makeStyles({
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
        backgroundColor: tokens.colorNeutralBackgroundAlpha2,
        backdropFilter: 'blur(16px)',
        zIndex: '9999',
        ...{
            ...shorthands.padding('4px'),
            ...shorthands.borderTop(
                tokens.strokeWidthThin,
                'solid',
                tokens.colorNeutralStroke1
            ),
            ...shorthands.overflow('clip'),
        },
        '&>.left': {
            width: '100%',
            flexBasis: '3/12',
            display: 'none',
            '@media (min-width: 720px)': {
                display: 'block'
            },
        },
        '&>.center': {
            flexBasis: '6/12',
            '@media (min-width: 720px)': {
                flexBasis: '9/12',
                justifyContent: 'center',
                alignItems: 'center',
            },
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            '&>div': {
                height: '100%',
                display: 'flex',
                ...{
                    ...shorthands.padding('1px'),
                    ...shorthands.overflow('auto')
                }
            },
            ...{
                ...shorthands.overflow('auto')

            }
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
        ...{
            ...shorthands.gap('4px'),
        },
        '&>li': {
            height: '100%',
            aspectRatio: '1/1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    scalingButton: {
        '&>div': {
            transitionDuration: tokens.durationNormal
        },
        '&:active>div': {
            scale: '0.75'
        },
        '&:hover': {
            backgroundColor: tokens.colorNeutralBackground1Hover,
            ...{
                ...shorthands.outline(tokens.strokeWidthThin, 'solid', tokens.colorNeutralStroke2),
            }
        },
        ...{
            ...shorthands.borderRadius(tokens.borderRadiusMedium),
            ...shorthands.padding('6px'),            
        }
    },
})

const StartBarContext = createContext(null)

/**
 * The apps of the running in background
 */
function RunningAppListItem({ icon, onClick }: {
    icon: ReactElement,
    onClick: () => void
}) {
    const classes = useStyles()

    return (
        <li className={classes.scalingButton} onClick={onClick}>
            <div>
                { icon }
            </div>
        </li>
    )
}
function RunningAppList() {
    const classes = useStyles()

    const {
        processStates
    } = useSystemSelector(s => s.workspace)
    const dispatch = useSystemDispatch()

    return (
        <ul
            className={classes.runningAppList}
        >
            {
                processStates.map((e: WorkspaceProcessState, i: number) => (
                    <RunningAppListItem
                        key={i}
                        icon={e.state.icon}
                        onClick={() => {
                            dispatch(updatePropertyForAllProcessState({
                                properties: ({
                                    active: false
                                })
                            }))
                            dispatch(updateStateByIdFromProcessStates({
                                id: e.state.processId,
                                state: i => ({
                                    ...i,
                                    minimize: !i.minimize,
                                    active: true
                                })
                            }))
                        }}
                    ></RunningAppListItem>
                ))
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
                <div>
                    <StartButton
                        className={classes.scalingButton}
                        setActiveStartPanel={setActiveStartPanel}
                    ></StartButton>
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
