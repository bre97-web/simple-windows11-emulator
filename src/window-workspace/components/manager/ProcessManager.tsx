import { useSystemSelector } from "@/store/store"
import { WorkspaceProcessState } from "@/store/workspaceSlice"
import { Button, makeStyles, shorthands, tokens } from "@fluentui/react-components"
import {
    CallEnd20Regular
} from "@fluentui/react-icons"
import { useState } from "react"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        ...{
            ...shorthands.padding('8px'),
            ...shorthands.gap('8px'),
        },
    },
    controlPanel: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        backgroundColor: tokens.colorNeutralBackground1,
        ...{
            ...shorthands.padding('8px'),
            ...shorthands.borderRadius(tokens.borderRadiusMedium),
        },
    },
    processPanel: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: tokens.colorNeutralBackground1,
        ...{
            ...shorthands.padding('8px'),
            ...shorthands.borderRadius(tokens.borderRadiusMedium),
        },
        '&>li': {
            backgroundColor: tokens.colorNeutralBackground1,
            ...{
                ...shorthands.padding('8px'),
                ...shorthands.borderRadius(tokens.borderRadiusMedium),
            },
        },
        '&>li:hover': {
            backgroundColor: tokens.colorNeutralBackground1Hover,
        }
    }
})

function ControlPanel({ currentProcess }: {
    currentProcess: WorkspaceProcessState
}) {
    const classes = useStyles()

    return (
        <div
            className={classes.controlPanel}
        >

            <Button
                appearance="subtle"
                icon={<CallEnd20Regular></CallEnd20Regular>}
                onClick={() => {
                    currentProcess.setState(e => ({
                        ...e,
                        requestClose: true
                    }))
                }}
            >End Task</Button>
        </div>
    )
}

function ProcessListItem({ process, setCurrentProcess }: {
    process: WorkspaceProcessState,
    setCurrentProcess: (e: WorkspaceProcessState) => void
}) {

    return (
        <li
            onClick={() => setCurrentProcess(process)}
        >{ process.state.title }</li>
    )
}
function ProcessList({ setCurrentProcess }: {
    setCurrentProcess: (e: WorkspaceProcessState) => void
}) {
    const classes = useStyles()

    const {
        processStates
    } = useSystemSelector(e => e.workspace)

    return (
        <ul className={classes.processPanel}>
            {
                processStates.map(e => (
                    <ProcessListItem
                        key={e.state.processId}
                        process={e}
                        setCurrentProcess={setCurrentProcess}
                    ></ProcessListItem>
                ))
            }
        </ul>
    )
}
function ProcessPanel({ setCurrentProcess }: {
    setCurrentProcess: (e: WorkspaceProcessState) => void
}) {
    return (
        <>
            <ProcessList
                setCurrentProcess={setCurrentProcess}
            ></ProcessList>
        </>
    )
}

function Content() {
    const classes = useStyles()
    const [currentProcess, setCurrentProcess] = useState(null)

    return (
        <div
            className={classes.root}
        >
            <ControlPanel
                currentProcess={currentProcess}
            ></ControlPanel>
            <ProcessPanel
                setCurrentProcess={setCurrentProcess}
            ></ProcessPanel>
        </div>
    )
}

export function ProcessManager() {
    return (
        <Content></Content>
    )
}