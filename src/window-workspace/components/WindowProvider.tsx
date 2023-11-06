import { ProcessState, StateContextType } from "@/hooks/useProcessState"
import { makeStyles, Button, FluentProvider, Label, tokens, webDarkTheme, webLightTheme, shorthands, mergeClasses, Tooltip } from "@fluentui/react-components"
import { MouseEventHandler, ReactElement, useContext, useEffect, useRef, useState } from "react"
import {
    ErrorCircle16Regular
} from "@fluentui/react-icons"
import { pushStateToProcessStates, removeStateByIdFromProcessStates, updateStateByIdFromProcessStates } from "../../store/workspaceSlice"
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


    const Title = () => <Label className="title">{state.title}</Label>
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
                        minimize: true,
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
                        maximize: !e.maximize,
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
        <main className={classes.body}>
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
    const {
        state,
        setState,
    } = useContext(StateContext)

    const onGragEvent = (e: React.MouseEvent<HTMLElement, MouseEvent>) => () => {
        if (state.maximize) return
        
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
                x: currentDisPostion.x,
                y: currentDisPostion.y,
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
            }}
            ref={windowRef}
        >
            <Header
                setClosing={(closingValue) => {
                    setState(e => ({
                        ...e,
                        closing: closingValue
                    }))
                }}
                onMouseDown={onGragEvent}
                StateContext={StateContext}
            ></Header>

            <Body StateContext={StateContext}></Body>
        </div>
    )
}

function WindowWorkspace({ StateContext }: {
    StateContext: StateContextType
}) {
    const isDarkEnabled = useSystemSelector(state => state.theme.isDarkEnabled)

    return (
        <FluentProvider theme={isDarkEnabled ? webDarkTheme : webLightTheme}>
            <Window StateContext={StateContext}></Window>
        </FluentProvider>
    )
}

/**
 * WindowWorkspaceProvider.tsx
 * 
 * 此渲染函数内部维护一个state。state的数据来源自state_copy（从useProcessState），state和state_copy没有任何链接。
 * 任何state的数据更改都应该反映到processStates（位于WindowWorkspaceGroupProvider）。
 */
export function WindowProvider({ unmount, state_copy, StateContext, children }: {
    unmount: () => void
    state_copy: ProcessState
    StateContext: StateContextType
    children: ReactElement
}) {

    /**
     * 数据来源state_copy和数据state没有任何联系，state_copy仅作为state的初始值。
     */
    const [state, setState] = useState(state_copy)

    /**
     * 任何state的数据更改都应该立即反映到WindowWorkspaceGroupProvider中的procesStates
     */
    const dispatch = useSystemDispatch()

    useEffect(() => {
        dispatch(removeStateByIdFromProcessStates({
            id: state.processId
        }))
        const timer = setTimeout(() => unmount(), 250)
        return () => clearTimeout(timer)
    }, [state.closing])
    useEffect(() => {
        if(state.closing) return 
        try {
            dispatch(pushStateToProcessStates({
                state,
                setState
            }))    
        } catch (error) {
            dispatch(updateStateByIdFromProcessStates({
                id: state.processId,
                state: state
            }))
        }

    }, [state])

    return (
        <StateContext.Provider
            value={{
                state,
                setState,
                unmount,
                children
            }}
        >
            <WindowWorkspace
                StateContext={StateContext}
            ></WindowWorkspace>
        </StateContext.Provider>
    )
}
