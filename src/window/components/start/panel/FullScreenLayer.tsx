import { makeStyles } from "@fluentui/react-components"
import { ReactElement } from "react"

const useStyles = makeStyles({
    root: {
        height: '100svh',
        width: '100%',
        position: 'fixed',
        zIndex: '0',
        top: '0',
        left: '0'
    },
})

export function FullScreenLayer({ children }: {
    children: ReactElement
}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            { children }
        </div>
    )
}