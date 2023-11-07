import { setIsLogIn } from "@/store/accountSlice"
import { useSystemDispatch, useSystemSelector } from "@/store/store"
import { makeStyles, tokens, shorthands, Avatar, Button, Input, Title1, Label } from "@fluentui/react-components"
import { 
    ArrowRight16Regular,
    Password16Regular
} from "@fluentui/react-icons"
import moment from "moment"
import { useEffect, useState, createContext, useContext, useRef, useMemo } from "react"

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100svh',
        width: '100%',
        ...{
            ...shorthands.overflow('clip'),
        },
    },
    screenSaver: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        height: '100%',
        width: '100%',
        position: 'relative',
        zIndex: '1',
        transitionDuration: tokens.durationUltraSlow,
        ...{
            ...shorthands.overflow('clip'),
            ...shorthands.padding('28px', '0')
        },
        '&>section': {
            position: 'relative',
            pointerEvents: 'none',
            userSelect: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '&>:nth-child(1)': {
                fontWeight: tokens.fontWeightBold,
                fontSize: tokens.fontSizeHero1000,
                color: tokens.colorNeutralBackground1,
                lineHeight: tokens.lineHeightHero1000
            },
            '&>:nth-child(2)': {
                fontWeight: tokens.fontWeightBold,
                fontSize: tokens.fontSizeBase600,
                color: tokens.colorNeutralBackground1,
                lineHeight: tokens.lineHeightBase600
            },
        },
    },
    screenSaverBackground: {
        backgroundImage: 'url("../assets/imgs/windows-11-minimalism-material-minimal-hd-wallpaper.jpg")',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        userSelect: 'none',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        transitionDuration: tokens.durationUltraSlow,
        animationName: {
            from: {
                scale: '1.25',
                filter: 'blur(32px)',
            },
            to: {
                scale: '1',
                filter: 'blur(0px)',
            },
        },
        animationDuration: tokens.durationUltraSlow,
    },
    graggableWindow: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0'
    },
    login: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        ...{
            ...shorthands.gap('32px')
        }
    },
    profilePanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...{
            ...shorthands.gap('8px'),
        },
        '&>.username': {
            color: tokens.colorNeutralBackground1,
            userSelect: 'none',
        },
    },
})

const LockScreenContext = createContext(null)


function ScreenSaverTime({ format }: {
    format: string
}) {
    const [time, setTime] = useState(moment().format(format))

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(moment().format(format))
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })

    return <p>{ time }</p>
}
function GraggableWindow() {
    const classes = useStyles()
    const {
        setLeaveScreenSaver,
        setCurrentYPosition
    } = useContext(LockScreenContext)

    const grag = useRef({
        pageHeight: 0,
        position: {
            start: 0,
            end: 0
        }
    })
    const verifyUnlock = (): boolean => {
        if(grag.current.position.start - grag.current.position.end >= (grag.current.pageHeight / 2)) {
            setLeaveScreenSaver(true)
            return true
        }
        return false
    }
    return (
        <div
            className={classes.graggableWindow}
            draggable={true}
            onDragStart={e => {
                grag.current.position.start = e.clientY
            }}
            onDragOver={e => {
                if(grag.current.position.start - e.clientY > 0) {
                    setCurrentYPosition(-(grag.current.position.start - e.clientY) / 2)
                }
            }}
            onDragEnd={e => {
                grag.current.position.end = e.clientY
                grag.current.pageHeight = e.screenY
                const result = verifyUnlock()
                if(!result) {
                    setCurrentYPosition(0)
                }
            }}
        ></div>
    )
}
function ScreenSaver() {
    const classes = useStyles()
    const {
        leaveScreenSaver,
        currentYPosition
    } = useContext(LockScreenContext)

    return (
        <div
            className={classes.screenSaver}
            style={{
                transform: `translateY(${leaveScreenSaver ? -100 : 0}%)`
            }}
        >
            <GraggableWindow></GraggableWindow>
            <section
                style={{
                    top: `${currentYPosition}px`,
                    transitionDuration: currentYPosition === 0 ? tokens.durationNormal : '',
                }}
            >
                <ScreenSaverTime format={"HH:mm"}></ScreenSaverTime>
                <ScreenSaverTime format="MM-DD-YYYY"></ScreenSaverTime>
            </section>
        </div>
    )
}

function ScreenSaverBackground() {
    const classes = useStyles()
    const {
        leaveScreenSaver
    } = useContext(LockScreenContext)

    return (
        <div
            className={classes.screenSaverBackground}
            style={{
                backgroundPosition: 'center',
                scale: `${leaveScreenSaver ? 1.25 : ''}`,
                filter: `blur(${leaveScreenSaver ? 32 : 0}px) brightness(${leaveScreenSaver ? 0.75 : 1})`,
            }}
        ></div>
    )
}

function ProfilePanel() {
    const classes = useStyles()

    const {
        name
    } = useSystemSelector(e => e.account.currentAccount)
    return (
        <div className={classes.profilePanel}>
            <Avatar size={128}></Avatar>
            <Title1 className="username">{ name }</Title1>
        </div>
    )
}
function LoginForm() {
    const [typedPassword, setTypedPassword] = useState('')

    const {
        password
    } = useSystemSelector(state => state.account.currentAccount)
    const dispatch = useSystemDispatch()

    const [isError, setIsError] = useState(false)

    const verifyPassword = useMemo((): boolean => {
        if(password === typedPassword) {
            return true
        }
        return false
    }, [typedPassword])
    const loginEvent = () => {
        if(verifyPassword) {
            setIsError(false)
            dispatch(setIsLogIn(true))
        } else {
            setIsError(true)
        }
    }

    useEffect(() => {
        const verifyPasswordKeyupEvent = (e: KeyboardEvent) => {
            if(e.key === 'Enter') {
                loginEvent()
            }
        }
        window.addEventListener('keyup', verifyPasswordKeyupEvent)
        return () => {
            window.removeEventListener('keyup', verifyPasswordKeyupEvent)
        }
    })

    return (
        <>
            <Input
                placeholder="Password"
                type="password"
                inputMode="text"
                autoFocus
                defaultValue={typedPassword}
                onInput={e => {
                    setIsError(false)
                    setTypedPassword((e.target as HTMLInputElement).value)
                }}
                appearance="filled-lighter"
                contentBefore={
                    <Password16Regular></Password16Regular>
                }
                contentAfter={
                    <Button
                        size="small"
                        appearance="subtle"
                        icon={<ArrowRight16Regular></ArrowRight16Regular>}
                        onClick={loginEvent}
                    ></Button>
                }

            ></Input>

            {
                isError && (
                    <Label
                        style={{
                            color: tokens.colorPaletteRedBackground2
                        }}
                    >Password is incorrect</Label>
                )
            }
            
        </>

    )
}
function Login() {
    const classes = useStyles()

    return (
        <div className={classes.login}>
            <ProfilePanel></ProfilePanel>
            <LoginForm></LoginForm>
        </div>
    )
}

export function LockScreen() {
    const classes = useStyles()

    const [leaveScreenSaver, setLeaveScreenSaver] = useState(false)
    const [currentYPosition, setCurrentYPosition] = useState(0)

    useEffect(() => {
        if(!leaveScreenSaver) {
            const gotoLogin = (e: Event) => {
                setLeaveScreenSaver(true)
                e.preventDefault()
            }
            window.addEventListener('keydown', gotoLogin)
            return () => {
                window.removeEventListener('keydown', gotoLogin)
            }
        }
        const createLockTimeout = (timeout: number) => setTimeout(() => {
            setLeaveScreenSaver(false)
            setCurrentYPosition(0)
        }, timeout)

        let timer = createLockTimeout(60000)
        const addSomeTimeToTimer = () => {
            clearTimeout(timer)
            timer = createLockTimeout(60000)
        }

        window.addEventListener('keypress', addSomeTimeToTimer)

        return () => {
            window.removeEventListener('keypress', addSomeTimeToTimer)
        }
    }, [leaveScreenSaver])

    return (
        <div className={classes.root}>
            <LockScreenContext.Provider
                value={{
                    leaveScreenSaver,
                    setLeaveScreenSaver,
                    currentYPosition,
                    setCurrentYPosition
                }}
            >
                <ScreenSaver></ScreenSaver>

                {
                    leaveScreenSaver && <Login></Login>
                }

                <ScreenSaverBackground></ScreenSaverBackground>


            </LockScreenContext.Provider>
        </div >
    )
}