import { Button, Card, makeStyles, shorthands, tokens } from "@fluentui/react-components"
import { Calendar } from "@fluentui/react-calendar-compat"
import moment from "moment"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { FullScreenLayer } from "./FullScreenLayer"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'end',
        height: '100%',
        ...{
            ...shorthands.overflow('clip'),
        },
        '&>p': {
            fontWeight: tokens.fontWeightRegular,
            fontSize: tokens.fontSizeBase100,
            lineHeight: tokens.lineHeightBase100
        }
    },
    panel: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'end',
        ...{
            ...shorthands.padding('0', '16px', '48px', '16px'),
            ...shorthands.overflow('auto')
        },
        '&.active': {
            animationName: {
                from: {
                    transform: 'translateY(24px)',
                    opacity: 0
                },
                to: {
                    transform: 'translateY(0px)',
                    opacity: 1
                }
            },
            animationDuration: tokens.durationNormal,
        },
        '&.inactive': {
            animationName: {
                from: {
                    transform: 'translateY(0px)',
                    opacity: 1
                },
                to: {
                    transform: 'translateY(24px)',
                    opacity: 0
                }
            },
            animationDuration: tokens.durationNormal,
        },
    },
    panelContent: {
        width: '100%',
        maxWidth: 'fit-content',
        backdropFilter: 'blur(16px)',
        backgroundColor: tokens.colorNeutralBackgroundAlpha2,
        ...{
            ...shorthands.overflow('auto'),
        },
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'end',
        ...{
            ...shorthands.padding('16px'),
            ...shorthands.overflow('auto'),
            ...shorthands.gap('32px'),
        },
    },
})


function CalendarPanelContent({ innerRef }: {
    innerRef: MutableRefObject<undefined>
}) {
    const clases = useStyles()
    return (
        <Card
            ref={innerRef}
            className={clases.panelContent}
        >
            <Calendar></Calendar>   
        </Card>
    )
}
export function CalendarPanel({ setActiveCalendarPanel }: {
    setActiveCalendarPanel: (e: boolean) => void
}) {
    const classes = useStyles()
    const ref = useRef()
    const [closing, setClosing] = useState(false)
    
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null
        if(closing) {
            timer = setTimeout(() => setActiveCalendarPanel(false), 150)
        }
        return () => {
            if(timer !== null) {
                clearTimeout(timer)
            }
        }
    }, [closing])

    const boundClickEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(!(ref.current as HTMLElement).contains((e.target as HTMLElement))) {
            setClosing(true)
        }
    }

    return (
        <FullScreenLayer>
            <div
                className={classes.panel + (closing ? ' inactive' : ' active')}
                onClick={e => boundClickEvent(e)}
            >
                <CalendarPanelContent innerRef={ref}></CalendarPanelContent>
            </div>
        </FullScreenLayer>
    )
}

export function CalendarButton({ setActiveCalendarPanel }: {
    setActiveCalendarPanel: (value: (e: boolean) => boolean) => void
}) {
    const clases = useStyles()

    const ref = useRef()
    const time = {
        time: moment().format('HH:MM'),
        date: moment().format('mm/DD/YYYY')
    }

    useEffect(() => {
        const timer: NodeJS.Timeout = setInterval(() => {
            time.time = moment().format('HH:MM')
            time.date = moment().format('mm/DD/YYYY');

            (ref.current as HTMLElement).children.item(0).children.item(0).innerText = time.time;
            (ref.current as HTMLElement).children.item(0).children.item(1).innerText = time.date;
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    })

    return (
        <Button
            ref={ref}
            appearance="subtle"
            onClick={() => setActiveCalendarPanel(e => !e)}
            style={{
                minWidth: 'unset',
            }}
        >
            <div className={clases.root}>
                <p>{ time.time }</p>
                <p>{ time.date }</p>
            </div>
        </Button>
    )
}
