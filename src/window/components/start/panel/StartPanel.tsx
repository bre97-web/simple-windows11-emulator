import { Avatar, Button, Card, Input, Label, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, makeStyles, shorthands, tokens } from "@fluentui/react-components"
import { 
    Search20Regular,
    Power24Regular,
    Sleep20Regular,
    PlugDisconnected20Regular,
    ArrowSyncCircle20Regular,
    NotebookSync20Regular,
    ArrowRight16Regular,
    ArrowLeft16Regular
} from "@fluentui/react-icons"
import { MutableRefObject, ReactElement, useEffect, useRef, useState } from "react"
import { FullScreenLayer } from "./FullScreenLayer"
import { useDispatch } from "react-redux"
import { setRequestToShutdown } from "@/store/systemSlice"
import { AvailableAppList } from "@/window-workspace"
import { useProcess, useProcessState } from "@/hooks/useProcessState"
import { pushProcess } from "@/store/processSlice"

const useStyles = makeStyles({
    startButton: {
        height: '100%',
        aspectRatio: '1 / 1',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        ...{
            ...shorthands.borderRadius(tokens.borderRadiusSmall),
            ...shorthands.gap('1.25px'),
            ...shorthands.overflow('clip'),
        },
        '&>:first-child': {
            backgroundColor: '#09e3f0',
        },
        '&>:first-child ~ div': {
            backgroundColor: '#08a1f7',
        },
        '&:active': {
            filter: 'grayscale(0.25)',
        },
        '&:active>div': {
            backgroundColor: '#004fe1',
        }
    },
    startPanel: {
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
    startPanelContent: {
        width: '100%',
        maxWidth: '672px',
        backdropFilter: 'blur(16px)',
        backgroundColor: tokens.colorNeutralBackgroundAlpha2,
        alignSelf: 'center',
        ...{
            ...shorthands.padding('0'),
            ...shorthands.overflow('clip', 'auto'),
        },
        '&>.header': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            ...{
                ...shorthands.padding('16px'),
            },
        },
        '&>.body': {
            width: '200%',
            height: '100%',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            ...{
                ...shorthands.overflow('clip'),
            },
            '&>div>:first-child~*': {
                ...{

                    ...shorthands.margin('8px', '0'),
                },
            },
            '&>div.movePanel.active': {
                transform: 'translateX(-100%)',
                animationName: {
                    from: {
                        transform: 'translateX(0%)'
                    },
                    to: {
                        transform: 'translateX(-100%)'
                    },
                },
                animationDuration: tokens.durationNormal,
            },
            '&>div.movePanel.inactive': {
                transform: 'translateX(0%)',
                animationName: {
                    from: {
                        transform: 'translateX(-100%)'
                    },
                    to: {
                        transform: 'translateX(0%)'
                    },
                },
                animationDuration: tokens.durationNormal,
            },
            '&>div': {
                ...{
                    ...shorthands.padding('0', '32px'),
                    ...shorthands.overflow('auto'),
                },
                '&>nav~*': {
                },
            },
            '&>div>nav': {
                display: 'flex',
                justifyContent: 'space-between',
            },
        },
        '&>.footer': {
            backgroundColor: tokens.colorNeutralBackgroundAlpha,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            ...{
                ...shorthands.padding('16px', '32px'),
            },
        },
    },
    scalingButton: {
        '&>div': {
            transitionDuration: tokens.durationNormal
        },
        '&:active>div': {
            scale: '0.75'
        },
        '&:hover': {
            backgroundColor: tokens.colorNeutralBackground1Hover,
            ...{
                ...shorthands.outline(tokens.strokeWidthThin, 'solid', tokens.colorNeutralStroke2),
            }
        },
        ...{
            ...shorthands.borderRadius(tokens.borderRadiusMedium),
            ...shorthands.padding('6px'),

        }
    },
    pinnedAppList: {
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        ...{
            ...shorthands.gap('8px'),
        },
        '@media (min-width: 360px)': {
            gridTemplateColumns: '1fr 1fr 1fr',
        },
        '@media (min-width: 540px)': {
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
        '@media (min-width: 720px)': {
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        },
        '@media (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
        },
        '&>*': {
            // width: '100%',
            height: '100%',
            aspectRatio: '1 / 1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            ...{
                ...shorthands.padding('16px'),
                ...shorthands.gap('8px'),
            },
        },
        '&>*>.icon': {
            height: '100%',
            aspectRatio: '1 / 1',
        },
        '&>*>label': {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: tokens.fontSizeBase200,
            fontWeight: tokens.fontWeightRegular,
            lineHeight: tokens.lineHeightBase200,
        }
    },
    allAppList: {
        display: 'flex',
        flexDirection: 'column',
        ...{
            ...shorthands.gap('4px'),
        },
        '&>*>div': {
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            ...{
                ...shorthands.padding('4px'),
            },
            '&>.icon': {
                height: '100%',
                aspectRatio: '1 / 1',
            },
            '&>label': {
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: tokens.fontSizeBase200,
                fontWeight: tokens.fontWeightRegular,
                lineHeight: tokens.lineHeightBase200,
            }
        }
    },
})

function StartPanelContentAllAppListItem({ e }: {
    e: {
        title: string,
        element: ReactElement
    }
}) {
    const dispatch = useDispatch()

    return (
        <Button
            appearance="subtle"
            onClick={() => {
                const state = useProcessState({
                    title: e.title,
                })
                const instance = useProcess(state, e.element)
                instance.mount()
                dispatch(pushProcess(instance))
            }}
        >
            <div>
                <div className="icon"></div>
                <Label>{ e.title }</Label>
            </div>
        </Button>
    )
}
function StartPanelContentAllAppList() {
    const classes = useStyles()

    const list = AvailableAppList

    return (
        <ul className={classes.allAppList}>
            {
                list.map((e, i) => <StartPanelContentAllAppListItem key={i} e={e}></StartPanelContentAllAppListItem>)
            }
        </ul>
    )
}
function StartPanelContentPinnedAppListItem({ e }: {
    e: {
        title: string,
        element: ReactElement
    }
}) {
    const dispatch = useDispatch()

    return (
        <Button
            appearance="subtle"
            onClick={() => {
                const state = useProcessState({
                    title: e.title,
                })
                const instance = useProcess(state, e.element)
                instance.mount()
                dispatch(pushProcess(instance))
            }}        >
            <div className="icon">

            </div>
            <Label>{e.title}</Label>
        </Button>
    )
}
function StartPanelContentPinnedAppList() {
    const classes = useStyles()

    const list = AvailableAppList
    return (
        <ul className={classes.pinnedAppList}>
            {
                list.map((e, i) => <StartPanelContentPinnedAppListItem key={i} e={e}></StartPanelContentPinnedAppListItem>)
            }
        </ul>
    )
}

/**
 * Provides a profile avatar and a shutdown button
 */
function StartPanelContentNav() {
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <Avatar></Avatar>
            </div>

            <Menu>
                <MenuTrigger disableButtonEnhancement>
                    <Button
                        appearance="subtle"
                        icon={<Power24Regular></Power24Regular>}
                    ></Button>
                </MenuTrigger>
                <MenuPopover>
                    <MenuList>
                        <MenuItem
                            icon={<Sleep20Regular></Sleep20Regular>}
                        >Sleep</MenuItem>
                        <MenuItem
                            icon={<NotebookSync20Regular></NotebookSync20Regular>}
                        >Hibernate</MenuItem>
                        <MenuItem
                            icon={<PlugDisconnected20Regular></PlugDisconnected20Regular>}
                            onClick={() => dispatch(setRequestToShutdown(true))}
                        >Shutdown</MenuItem>
                        <MenuItem
                            icon={<ArrowSyncCircle20Regular></ArrowSyncCircle20Regular>}
                        >Restart</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </>
    )
}

/**
 * Provides pinned apps, search button
 */
function StartPanelContent({ innerRef }: {
    innerRef: MutableRefObject<undefined>
}) {
    const clases = useStyles()

    const [activeTheSecondPanel, setActiveSecondPanel] = useState(false)

    return (
        <Card
            ref={innerRef}
            className={clases.startPanelContent}
        >
            <div className="header">
                <Input
                    type="search"
                    contentBefore={<Search20Regular></Search20Regular>}
                    placeholder="Search for apps, settings, and documents."
                ></Input>
            </div>
            <div className="body">

                <div className={activeTheSecondPanel ? "movePanel active" : "movePanel inactive"}>
                    <nav>
                        <Label>Pinned</Label>
                        <Button
                            appearance="secondary"
                            icon={<ArrowRight16Regular></ArrowRight16Regular>}
                            iconPosition="after"
                            size="small"
                            onClick={() => setActiveSecondPanel(true)}
                        >All apps</Button>
                    </nav>
                    <StartPanelContentPinnedAppList></StartPanelContentPinnedAppList>
                </div>
                <div className={activeTheSecondPanel ? "movePanel active" : "movePanel inactive"}>
                    <nav>
                        <Label>Pinned</Label>
                        <Button
                            appearance="secondary"
                            icon={<ArrowLeft16Regular></ArrowLeft16Regular>}
                            iconPosition="before"
                            size="small"
                            onClick={() => setActiveSecondPanel(false)}
                        >Back</Button>
                    </nav>
                    <StartPanelContentAllAppList></StartPanelContentAllAppList>
                </div>

            </div>
            <div className="footer">
                <StartPanelContentNav></StartPanelContentNav>
            </div>
        </Card>
    )
}

export function StartPanel({ setActiveStartPanel }: {
    setActiveStartPanel: (e: boolean) => void
}) {
    const classes = useStyles()
    const ref = useRef()
    const [closing, setClosing] = useState(false)
    
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null
        if(closing) {
            timer = setTimeout(() => setActiveStartPanel(false), 150)
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
                className={classes.startPanel + (closing ? ' inactive' : ' active')}
                onClick={e => boundClickEvent(e)}
            >
                <StartPanelContent innerRef={ref}></StartPanelContent>
            </div>
        </FullScreenLayer>
    )
}
function StartIcon() {
    const classes = useStyles()
    return (
        <div className={classes.startButton}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export function StartButton({ setActiveStartPanel }: {
    setActiveStartPanel: (value: (e: boolean) => boolean) => void
}) {
    const classes = useStyles()
    return (
        <div
            className={classes.scalingButton}
            onClick={() => {
                setActiveStartPanel(e => !e)
            }}
        >
            <StartIcon></StartIcon>
        </div>
    )
}