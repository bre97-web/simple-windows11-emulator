import { makeStyles, shorthands, tokens } from '@fluentui/react-components'
import { useSelector } from 'react-redux'

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

    const brightness = useSelector(state => state.theme.brightness)
    const isNightlightEnabled = useSelector(state => state.theme.isNightlightEnabled)

    return (
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
    )
}