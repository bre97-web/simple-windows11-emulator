import { ProcessState, ProcessContext } from "@/hooks/useProcess"
import { makeStyles, Button, FluentProvider, Label, tokens, webDarkTheme, webLightTheme, shorthands, mergeClasses, Tooltip } from "@fluentui/react-components"
import { MouseEventHandler, ReactElement, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import {
    ErrorCircle16Regular
} from "@fluentui/react-icons"
import { pushStateToProcessStates, removeStateByIdFromProcessStates, updatePropertyForAllProcessState, updateStateByIdFromProcessStates } from "../../store/workspaceSlice"
import { useSystemDispatch, useSystemSelector } from "@/store/store"

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        backgroundColor: tokens.colorNeutralBackgroundAlpha2,
        backdropFilter: 'blur(16px)',
        userSelect: 'none',
        resize: "both",
        ...{
            ...shorthands.borderRadius(tokens.borderRadiusLarge),
            ...shorthands.border(tokens.strokeWidthThin, 'solid', tokens.colorNeutralStroke1),
            ...shorthands.overflow('clip'),
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
    body: {
        height: '100%',
        ...{
            ...shorthands.overflow('auto')
        }
    },
})

/**
 * 窗口头部
 * 提供窗口标题、窗口行动组（最小化、最大化、关闭）
 */
function Header({ StateContext, windowDomRef }: {
    StateContext: ProcessContext
    windowDomRef: React.MutableRefObject<undefined>
}) {
    const classes = useStyles()

    const {
        state,
        setState
    } = useContext(StateContext)


    const Title = () => useMemo(() => <Label className="title">{state.title}</Label>, [state.title])
    const CloseButton = () => useMemo(() => (
        <Tooltip
            content={"Close"}
            relationship="label"
            positioning={"before"}
        >
            <Button
                appearance="subtle"
                onMouseUp={() => {
                    setState(e => ({
                        ...e,
                        requestClose: true
                    }))
                }}
                icon={<ErrorCircle16Regular></ErrorCircle16Regular>}
            ></Button>
        </Tooltip>
    ), [state])
    const MinimizeButton = () => useMemo(() => (
        <Tooltip
            content={"Minimize"}
            relationship="label"
            positioning={"before"}
        >
            <Button
                appearance="subtle"
                onMouseUp={() => {
                    setState(e => ({
                        ...e,
                        minimize: true,
                    }))
                }}
                icon={<ErrorCircle16Regular></ErrorCircle16Regular>}
            ></Button>
        </Tooltip>
    ), [state])
    const MaximizeButton = () => useMemo(() => (
        <Tooltip
            content={"Maximize"}
            relationship="label"
            positioning={"before"}
        >
            <Button
                appearance="subtle"
                onMouseUp={() => {
                    setState(e => ({
                        ...e,
                        maximize: !e.maximize,
                    }))
                }}
                icon={<ErrorCircle16Regular></ErrorCircle16Regular>}
            ></Button>
        </Tooltip>
    ), [state])

    const onMouseDownEvent: MouseEventHandler<HTMLElement> = useCallback(e => {
        if (state.maximize) return

        const current: HTMLElement = windowDomRef.current

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
                x: currentDisPostion.x,
                y: currentDisPostion.y,
            }))
        }

        document.onmouseup = () => {
            document.onmousemove = null
            document.onmouseup = null
        }

        return
    }, [state])

    return (
        <header
            className={classes.header}
            onMouseDown={onMouseDownEvent}
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
    StateContext: ProcessContext
}) {
    const classes = useStyles()

    const {
        children
    } = useContext(StateContext)

    return (
        <main className={classes.body}>
            {children}
        </main>
    )
}

/**
 * 窗口
 */
function Window({ StateContext }: {
    StateContext: ProcessContext
}) {

    const windowDomRef = useRef()
    const {
        state,
    } = useContext(StateContext)



    const dispatch = useSystemDispatch()
    const onActiveWindowEvent: MouseEventHandler<HTMLDivElement> = useCallback(() => {
        dispatch(updatePropertyForAllProcessState({
            properties: ({
                active: false
            })
        }))
        dispatch(updateStateByIdFromProcessStates({
            id: state.processId,
            state: ({
                ...state,
                active: true
            })
        }))
    }, [state])

    const classes = useStyles()
    const windowStyles = mergeClasses(
        classes.root,
        state.closing && classes.willBeClosed,
        state.minimize && classes.minimize
    )

    return (
        <div
            className={windowStyles}
            style={{
                left: state.maximize ? '0' : state.x,
                top: state.maximize ? '0' : state.y,
                height: state.maximize ? '100%' : state.height,
                width: state.maximize ? '100%' : state.width,
                boxShadow: state.active ? tokens.shadow16 : '',
                zIndex: state.active ? 1000 : '',
            }}
            ref={windowDomRef}
            onMouseDownCapture={onActiveWindowEvent}
        >
            <Header
                windowDomRef={windowDomRef}
                StateContext={StateContext}
            ></Header>

            <Body StateContext={StateContext}></Body>
        </div>
    )
}

function WindowThemeProvider({ StateContext }: {
    StateContext: ProcessContext
}) {
    const isDarkEnabled = useSystemSelector(state => state.theme.isDarkEnabled)

    return (
        <FluentProvider theme={isDarkEnabled ? webDarkTheme : webLightTheme}>
            <Window StateContext={StateContext}></Window>
        </FluentProvider>
    )
}

/**
 * WindowProvider.tsx
 * 
 * 此渲染函数内部维护一个state。state的数据来源自state_copy（从useProcess），state和state_copy没有任何链接。
 * 任何state的数据更改都应该反映到processStates（位于store中的workspaceSlice）。
 */
export function WindowProvider({ unmount, state_copy, StateContext, children }: {
    unmount: () => void
    state_copy: ProcessState
    StateContext: ProcessContext
    children: ReactElement
}) {

    const [state, setState] = useState(state_copy)
    const dispatch = useSystemDispatch()

    /**
     * 追踪组件的关闭请求 'requestClose'
     * 
     * 当关闭请求为true时，首先将状态的closing设为true，然后在250ms后
     * 移除在processStates中对应的state与setState，同时卸载组件，期间
     * 的250ms容许组件显示最后的CSS动画。
     * 
     */
    useEffect(() => {
        if (!state.requestClose) return () => { }
        setState(e => ({
            ...e,
            closing: true
        }))
        const timer = setTimeout(() => {
            dispatch(removeStateByIdFromProcessStates({
                id: state.processId
            }))
            unmount()
        }, 250)
        return () => clearTimeout(timer)
    }, [state.requestClose])

    /**
     * 在组件首次渲染时将state与setState添加到processStates
     * 从此刻开始，本组件的state与setState可供外部访问
     */
    useEffect(() => {
        try {
            dispatch(pushStateToProcessStates({state, setState}))
        } catch (error) {
            dispatch(updateStateByIdFromProcessStates({
                id: state.processId,
                state: state
            }))
        }
    }, [])

    /**
     * 在组件渲染时设置状态的active，这将影响组件的CSS属性。
     */
    useEffect(() => {
        dispatch(updatePropertyForAllProcessState({
            properties: ({
                active: false
            })
        }))
        dispatch(updateStateByIdFromProcessStates({
            id: state.processId,
            state: ({
                ...state,
                active: true
            })
        }))
    }, [])

    return (
        <StateContext.Provider
            value={{
                state,
                setState,
                unmount,
                children
            }}
        >
            <WindowThemeProvider StateContext={StateContext}></WindowThemeProvider>
        </StateContext.Provider>
    )
}
