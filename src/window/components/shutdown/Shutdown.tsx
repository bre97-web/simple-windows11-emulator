import { setReadyToShutdown } from "@/store/systemSlice"
import { Body1, Body2, Label, ProgressBar, Spinner, makeStyles, tokens } from "@fluentui/react-components"
import { useEffect } from "react"
import ReactDOM from "react-dom/client"
import { useDispatch, useSelector } from "react-redux"

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
        }
    },
    spinnerPanel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    }
})

function ProssesRunningPanel() {

    return (
        <></>
    )
}

/**
 * Send a message to System Store request shutdown
 */
function SpinnerPanel() {
    const classes = useStyles()

    const dispatch = useDispatch()

    useEffect(() => {
        let timer: NodeJS.Timeout | null = setTimeout(() => {
            dispatch(setReadyToShutdown(true))
        }, 250)

        return () => {
            clearTimeout(timer)
        }
    })

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

    const dispatch = useDispatch()
    const needShutdown = useSelector(state => state.system.needShutdown)

    const hasProssesRunning = false

    return (
        <div className={classes.root}>

            {
                hasProssesRunning ?
                <ProssesRunningPanel></ProssesRunningPanel> :
                <SpinnerPanel></SpinnerPanel>
            }

        </div>
    )
}
