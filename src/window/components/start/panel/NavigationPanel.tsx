import { setBrightness, setIsDarkEnabled, setIsNightlightEnabled } from "@/store/themeSlice"
import { Button, Card, Label, Slider, makeStyles, shorthands, tokens } from "@fluentui/react-components"
import {
    Wifi120Regular,
    Wifi124Regular,
    Bluetooth24Regular,
    Airplane24Regular,
    BatterySaver24Regular,
    DarkTheme24Regular,
    SoundSource20Regular,
    BrightnessHigh24Regular,
    SoundSource24Regular,
    Eye24Regular
} from "@fluentui/react-icons"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FullScreenLayer } from "./FullScreenLayer"

const useStyles = makeStyles({
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
    buttonGroup: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        ...{
            ...shorthands.gap('8px'),
        },
    },
    sliderGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&>label': {
            display: 'flex',
            ...{
                ...shorthands.gap('8px'),
            },
        },
    },
})

function QuickActionButtonGroup() {
    const clases = useStyles()

    const isDarkEnabled = useSelector(state => state.theme.isDarkEnabled)
    const isNightlightEnabled = useSelector(state => state.theme.isNightlightEnabled)
    const dispatch = useDispatch()

    return (
        <div className={clases.buttonGroup}>
            <Button
                appearance="subtle"
                size="large"
                icon={<Wifi124Regular></Wifi124Regular>}
            ></Button>

            <Button
                appearance="subtle"
                size="large"
                icon={<Bluetooth24Regular></Bluetooth24Regular>}
            ></Button>

            <Button
                appearance="subtle"
                size="large"
                icon={<Airplane24Regular></Airplane24Regular>}
            ></Button>

            <Button
                appearance="subtle"
                size="large"
                icon={<BatterySaver24Regular></BatterySaver24Regular>}
            ></Button>

            <Button
                appearance={isDarkEnabled ? 'primary' : 'subtle'}
                size="large"
                onClick={() => {
                    dispatch(setIsDarkEnabled(!isDarkEnabled))
                }}
                icon={<DarkTheme24Regular></DarkTheme24Regular>}
            ></Button>

            <Button
                appearance={isNightlightEnabled ? 'primary' : 'subtle'}
                size="large"
                onClick={() => {
                    dispatch(setIsNightlightEnabled(!isNightlightEnabled))
                }}
                icon={<Eye24Regular></Eye24Regular>}
            ></Button>
        </div>
    )
}

function QuickActionSliderGroup() {
    const clases = useStyles()

    const brightness = useSelector(state => state.theme.brightness)
    const dispatch = useDispatch()

    return (
        <div className={clases.sliderGroup}>
            <Label>
                <BrightnessHigh24Regular></BrightnessHigh24Regular>
                <Slider
                    max={100}
                    min={0}
                ></Slider>
            </Label>
            <Label>
                <SoundSource24Regular></SoundSource24Regular>
                <Slider
                    max={100}
                    min={30}
                    defaultValue={brightness}
                    onChange={e => {
                        dispatch(setBrightness(e.target.value))
                    }}
                ></Slider>
            </Label>
        </div>
    )
}

function NavigationPanelContent({ innerRef }: {
    innerRef: MutableRefObject<undefined>
}) {
    const clases = useStyles()

    return (
        <Card
            ref={innerRef}
            className={clases.panelContent}
        >
            <QuickActionButtonGroup></QuickActionButtonGroup>
            <QuickActionSliderGroup></QuickActionSliderGroup>

        </Card>
    )
}
export function NavigationPanel({ setActiveNavigationPanel }: {
    setActiveNavigationPanel: (e: boolean) => void
}) {
    const classes = useStyles()

    const ref = useRef()
    const [closing, setClosing] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null
        if (closing) {
            timer = setTimeout(() => setActiveNavigationPanel(false), 150)
        }
        return () => {
            if (timer !== null) {
                clearTimeout(timer)
            }
        }
    }, [closing])

    const boundClickEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!(ref.current as HTMLElement).contains((e.target as HTMLElement))) {
            setClosing(true)
        }
    }

    return (
        <FullScreenLayer>
            <div
                className={classes.panel + (closing ? ' inactive' : ' active')}
                onClick={e => boundClickEvent(e)}
            >
                <NavigationPanelContent innerRef={ref}></NavigationPanelContent>
            </div>
        </FullScreenLayer>
    )
}
export function NavigationButton({ setActiveNavigationPanel }: {
    setActiveNavigationPanel: (value: (e: boolean) => boolean) => void
}) {

    return (
        <Button
            appearance="subtle"
            onClick={() => setActiveNavigationPanel(e => !e)}
            style={{
                minWidth: 'unset',
            }}
        >
            <Wifi120Regular></Wifi120Regular>
            <SoundSource20Regular></SoundSource20Regular>
        </Button>
    )
}
