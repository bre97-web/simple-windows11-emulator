import { setIsLogIn } from "@/store/accountSlice"
import { makeStyles, tokens, shorthands, Avatar, Button, Input } from "@fluentui/react-components"
import { 
    ArrowRight16Regular,
    Password16Regular
} from "@fluentui/react-icons"
import moment from "moment"
import { useEffect, useState, createContext, useContext } from "react"
import { useDispatch, useSelector } from "react-redux"

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100svh',
        width: '100%',
        ...{
            ...shorthands.overflow('clip'),
        }
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
    }
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
        setLeaveScreenSaver
    } = useContext(LockScreenContext)

    const grag = {
        pageHeight: 0,
        position: {
            start: 0,
            end: 0
        }
    }
    const verify = () => {
        if(grag.position.start - grag.position.end >= (grag.pageHeight / 2)) {
            setLeaveScreenSaver(true)
        }
    }
    return (
        <div
            className={classes.graggableWindow}
            draggable={true}
            onDragStart={e => {
                grag.position.start = e.clientY
            }}
            onDragEnd={e => {
                grag.position.end = e.clientY
                grag.pageHeight = e.screenY
                verify()
            }}
        ></div>
    )
}
function ScreenSaver() {
    const classes = useStyles()
    const {
        leaveScreenSaver
    } = useContext(LockScreenContext)

    return (
        <div
            className={classes.screenSaver}
            style={{
                transform: `translateY(${leaveScreenSaver ? -100 : 0}%)`
            }}
        >
            <GraggableWindow></GraggableWindow>
            <section>
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
                scale: `${leaveScreenSaver ? 1.25 : 1}`,
                filter: `blur(${leaveScreenSaver ? 32 : 0}px) brightness(${leaveScreenSaver ? 0.75 : 1})`,
            }}
        ></div>
    )
}
function Login() {
    const classes = useStyles()

    const user = useSelector(state => state.account.currentAccount)
    const dispatch = useDispatch()

    const [password, setPassword] = useState('')

    return (
        <div className={classes.login}>

            <Avatar size={128}></Avatar>

            <Input
                placeholder="Password"
                type="password"
                value={password}
                onInput={e => setPassword((e.target as HTMLInputElement).value)}
                appearance="filled-lighter"
                contentBefore={
                    <Password16Regular></Password16Regular>
                }
                contentAfter={
                    <Button
                        size="small"
                        appearance="subtle"
                        icon={<ArrowRight16Regular></ArrowRight16Regular>}
                        onClick={() => {
                            if(password === user.password) {
                                dispatch(setIsLogIn(true))
                            }
                        }}
                    ></Button>
                }
            ></Input>

        </div>
    )
}

export function LockScreen() {
    const classes = useStyles()

    const [leaveScreenSaver, setLeaveScreenSaver] = useState(false)
    return (
        <div className={classes.root}>
            <LockScreenContext.Provider
                value={{
                    leaveScreenSaver,
                    setLeaveScreenSaver
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