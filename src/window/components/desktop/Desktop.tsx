import { makeStyles } from "@fluentui/react-components"

const useStyles = makeStyles({
    root: {
        backgroundImage: 'url("../assets/imgs/windows-11-minimalism-material-minimal-hd-wallpaper.jpg")',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        userSelect: 'none',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    }
})

export function Desktop() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            
        </div>
    )
}