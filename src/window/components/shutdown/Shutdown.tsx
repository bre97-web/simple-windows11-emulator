import { useSystemDispatch, useSystemSelector } from "@/store/store"
import { setReadyToShutdown } from "@/store/systemSlice"
import { WorkspaceProcessState, updatePropertyForAllProcessState } from "@/store/workspaceSlice"
import { Body2, Button, Spinner, makeStyles, shorthands } from "@fluentui/react-components"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        '& *': {
            color: 'white'
        },
        ...{
            ...shorthands.overflow('auto'),
            ...shorthands.padding('48px'),
        },
    },
    spinnerPanel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    runningPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...{
            ...shorthands.padding('24px'),
        },
        '&>*': {
            maxWidth: '480px',
        },
        '&>ul': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'start',   
        },
        '&>.actions': {
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
        },
    }
})
function RunningProcessListItem({ e }: {
    e: WorkspaceProcessState
}) {
    return (
        <Button
            appearance="transparent"
            icon={e.state.icon}
        >
            {e.state.title}
        </Button>
    )
}

function RunningProcessActions({ setIsNoRunning }: {
    setIsNoRunning: (e: boolean) => void
}) {
    const dispatch = useSystemDispatch()
    return (
        <div className="actions">
            <Button
                appearance="primary"
                onClick={() => {
                    dispatch(updatePropertyForAllProcessState({
                        properties: {
                            requestClose: true
                        }
                    }))
                    setIsNoRunning(true)
                }}
            >End All Processes</Button>
        </div>
    )
}
function RunningProcessList({ list }: {
    list: WorkspaceProcessState[]
}) {
    return (
        <ul>
            {
                list.map((e, i) => <RunningProcessListItem key={i} e={e}></RunningProcessListItem>)
            }
        </ul>
    )
}
function ProssesRunningPanel({ setIsNoRunning }: {
    setIsNoRunning: (e: boolean) => void
}) {
    const classes = useStyles()
    const process = useSystemSelector(e => e.workspace.processStates)

    useEffect(() => {
        if(process.length === 0) {
            setIsNoRunning(true)
        }
    }, [])

    return (
        <div className={classes.runningPanel}>
            <RunningProcessList list={process}></RunningProcessList>

            <RunningProcessActions
                setIsNoRunning={setIsNoRunning}
            ></RunningProcessActions>
        </div>
    )
}

/**
 * Send a message to System Store request shutdown
 */
function SpinnerPanel() {
    const classes = useStyles()

    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setReadyToShutdown(true))
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className={classes.spinnerPanel}>
            <Spinner
                size="huge"
                label={
                    <Body2>Computer is closing</Body2>
                }
                labelPosition="below"
            ></Spinner>
        </div>
    )
}

export function Shutdown() {
    const classes = useStyles()
    const [isNoRunning, setIsNoRunning] = useState(false)

    return (
        <div className={classes.root}>
            {
                !isNoRunning ?
                    <ProssesRunningPanel
                        setIsNoRunning={setIsNoRunning}
                    ></ProssesRunningPanel> :
                    <SpinnerPanel></SpinnerPanel>
            }

        </div>
    )
}
