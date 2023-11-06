import { useSystemSelector } from '@/store/store'
import { makeStyles, shorthands } from '@fluentui/react-components'

const useStyles = makeStyles({
    root: {
        pointerEvents: 'none',
        userSelect: 'none',
        '&>div': {
            position: 'fixed',
            left: '0',
            top: '0',
            zIndex: '9999',
            height: '100%',
            width: '100%',
            ...{
                ...shorthands.transition('all', '0.5s')
            },
        },
    },
})

export function Mask() {
    const classes = useStyles()

    const brightness = useSystemSelector(state => state.theme.brightness)
    const isNightlightEnabled = useSystemSelector(state => state.theme.isNightlightEnabled)
    const readyToShutdown = useSystemSelector(state => state.system.readyToShutdown)

    return (
        <>
            {
                !readyToShutdown &&
                <div className={classes.root}>

                    <div
                        style={{
                            backgroundColor: `rgba(0, 0, 0, ${100 - brightness}%)`,
                        }}
                    ></div>

                    <div
                        style={{
                            backgroundColor: `rgba(255, 175, 0, 0.${isNightlightEnabled ? '35' : '0'})`,
                        }}
                    ></div>

                </div>
            }
        </>
    )
}