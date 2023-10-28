import { ProcessState } from "@/hooks/useProcessState"
import { Store } from "@/store/store"
import { makeStyles, Button, FluentProvider, Label, tokens, webDarkTheme, webLightTheme, shorthands, mergeClasses, Tooltip } from "@fluentui/react-components"
import { MouseEventHandler, ReactElement, StrictMode, useContext, useEffect, useRef, useState } from "react"
import { Provider, useSelector } from "react-redux"
import {
    ErrorCircle16Regular
} from "@fluentui/react-icons"

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        backgroundColor: tokens.colorNeutralBackgroundAlpha2,
        backdropFilter: 'blur(16px)',
        userSelect: 'none',
        resize: "both",
        ...{
            ...shorthands.borderRadius(tokens.borderRadiusMedium),
            ...shorthands.border(tokens.strokeWidthThin, 'solid', tokens.colorNeutralStroke1),
        },
        animationName: {
            from: {
                transform: 'translateY(24px) scale(0.75)',
                opacity: '0',
            },
            to: {
                transform: 'translateY(0px)',
                opacity: '1',
            },
        },
        animationDuration: tokens.durationNormal,
        transitionDuration: tokens.durationNormal,
        '&:active': {
            transitionDuration: 'unset',
        },
    },
    willBeClosed: {
        opacity: '0',
        scale: '0.75',
        animationName: {
            from: {
                transform: 'translateY(0px)',
                opacity: '1',
            },
            to: {
                transform: 'translateY(24px)',
                opacity: '0',
            },
        },
        animationDuration: tokens.durationNormal,
    },
    minimize: {
        pointerEvents: 'none',
        opacity: '0',
        scale: '0.75',
        animationName: {
            from: {
                transform: 'translateY(0px)',
                opacity: '1',
            },
            to: {
                transform: 'translateY(24px)',
                opacity: '0',
            },
        },
        animationDuration: tokens.durationNormal,
    },
    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: tokens.colorNeutralBackgroundAlpha2,
        ...{
            ...shorthands.padding('2px'),
            ...shorthands.borderRadius(
                tokens.borderRadiusMedium,
                tokens.borderRadiusMedium,
                0,
                0
            ),
            ...shorthands.overflow('clip'),
        },
        '&>.title': {
            paddingLeft: '8px',
        },
        '&>.actions': {

        },
    },
})

/**
 * 窗口头部
 * 提供窗口标题、窗口行动组（最小化、最大化、关闭）
 */
function Header({ StateContext, setClosing, onMouseDown }: {
    StateContext: StateContextType
    setClosing: (e: boolean) => void
    onMouseDown: MouseEventHandler<HTMLElement>
}) {
    const classes = useStyles()

    const {
        state,
        setState
    } = useContext(StateContext)


    const Title = () => <Label className="title">{state.window.info.title}</Label>
    const CloseButton = () => (
        <Tooltip
            content={"Close"}
            relationship="label"
            positioning={"before"}
        >
            <Button
                appearance="subtle"
                onClick={() => setClosing(true)}
                icon={<ErrorCircle16Regular></ErrorCircle16Regular>}
            ></Button>
        </Tooltip>
    )
    const MinimizeButton = () => (
        <Tooltip
            content={"Minimize"}
            relationship="label"
            positioning={"before"}
        >
            <Button
                appearance="subtle"
                onClick={() => {
                    setState(e => ({
                        ...e,
                        accessibility: {
                            ...e.accessibility,
                            minimize: true,
                        },
                    }))
                }}
                icon={<ErrorCircle16Regular></ErrorCircle16Regular>}
            ></Button>
        </Tooltip>
    )
    const MaximizeButton = () => (
        <Tooltip
            content={"Maximize"}
            relationship="label"
            positioning={"before"}
        >
            <Button
                appearance="subtle"
                onClick={() => {
                    setState(e => ({
                        ...e,
                        accessibility: {
                            ...e.accessibility,
                            maximize: !e.accessibility.maximize,
                        },
                    }))
                }}
                icon={<ErrorCircle16Regular></ErrorCircle16Regular>}
            ></Button>
        </Tooltip>
    )

    return (
        <header
            className={classes.header}
            onMouseDown={onMouseDown}
        >
            <Title></Title>

            <div className="actions">
                <MinimizeButton></MinimizeButton>
                <MaximizeButton></MaximizeButton>
                <CloseButton></CloseButton>
            </div>
        </header>
    )
}

function Body({ StateContext }: {
    StateContext: StateContextType
}) {
    const classes = useStyles()

    const {
        children
    } = useContext(StateContext)
    
    return (
        <main>
            { children }
        </main>
    )
}

/**
 * 窗口
 */
function Window({ StateContext }: {
    StateContext: StateContextType
}) {

    const windowRef = useRef()

    const [closing, setClosing] = useState(false)
    useEffect(() => {
        if (!closing) return
        const timer = setTimeout(() => unmount(), 250)
        return () => {
            clearTimeout(timer)
        }
    }, [closing])

    const {
        state,
        setState,
        unmount
    } = useContext(StateContext)

    const onGragEvent = (e: MouseEvent): void => {
        if (state.accessibility.maximize) return

        const current: HTMLElement = windowRef.current

        // 计算鼠标距离弹出框内的位置
        const position = {
            x: e.clientX - current.offsetLeft,
            y: e.clientY - current.offsetTop
        }

        document.onmousemove = (e: MouseEvent) => {
            const currentDisPostion = {
                x: 0,
                y: 0
            }

            // 弹出框dialog距离窗口左上角的水平和纵向距离
            currentDisPostion.x = e.clientX - position.x
            currentDisPostion.y = e.clientY - position.y

            current.style.left = currentDisPostion.x + 'px'
            current.style.top = currentDisPostion.y + 'px'

            /**
             * Save the position from the mouse event
             */
            setState(e => ({
                ...e,
                window: {
                    ...e.window,
                    position: {
                        x: currentDisPostion.x,
                        y: currentDisPostion.y,
                    }
                }
            }))
        }

        document.onmouseup = () => {
            document.onmousemove = null
            document.onmouseup = null
        }

        return
    }


    const classes = useStyles()
    const windowStyles = mergeClasses(
        classes.root,
        closing && classes.willBeClosed,
        state.accessibility.minimize && classes.minimize
    )

    return (
        <div
            className={windowStyles}
            style={{
                left: state.accessibility.maximize ? '0' : state.window.position.x,
                top: state.accessibility.maximize ? '0' : state.window.position.y,
                height: state.accessibility.maximize ? '100%' : state.window.size.height,
                width: state.accessibility.maximize ? '100%' : state.window.size.width,
            }}
            ref={windowRef}
        >
            <Header
                setClosing={setClosing}
                onMouseDown={e => onGragEvent(e)}
                StateContext={StateContext}
            ></Header>

            <Body StateContext={StateContext}></Body>
        </div>
    )
}

function WindowWorkspace({ StateContext }: {
    StateContext: StateContextType
}) {
    const isDarkEnabled = useSelector(state => state.theme.isDarkEnabled)

    return (
        <FluentProvider theme={isDarkEnabled ? webDarkTheme : webLightTheme}>
            <Window StateContext={StateContext}></Window>
        </FluentProvider>
    )
}

/**
 * Trnaslate state
 */
export function WindowWorkspaceProvider({ unmount, state_copy, StateContext, children }: {
    unmount: () => void
    state_copy: ProcessState
    StateContext: StateContextType
    children: ReactElement
}) {

    const [state, setState] = useState(state_copy)

    return (
        <StrictMode>
            <Provider store={Store}>
                <StateContext.Provider
                    value={{
                        state,
                        setState: (value: React.SetStateAction<ProcessState>) => {
                            setState(value)
                            state_copy = state
                        },
                        unmount,
                        children
                    }}
                >
                    <WindowWorkspace
                        StateContext={StateContext}
                    ></WindowWorkspace>
                </StateContext.Provider>
            </Provider>
        </StrictMode >
    )
}


type StateContextType = React.Context<{
    state: ProcessState
    setState: (value: React.SetStateAction<ProcessState>) => void
    unmount: () => void
    children: ReactElement
}>