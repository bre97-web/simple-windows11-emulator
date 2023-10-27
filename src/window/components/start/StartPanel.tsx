import { Avatar, Button, Card, Input, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, makeStyles, shorthands, tokens } from "@fluentui/react-components"
import { 
    Search20Regular,
    Power24Regular,
    Sleep20Regular,
    PlugDisconnected20Regular,
    ArrowSyncCircle20Regular,
    NotebookSync20Regular,
} from "@fluentui/react-icons"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { FullScreenLayer } from "./FullScreenLayer"

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
        }
    },
    startPanelContent: {
        width: '100%',
        maxWidth: '672px',
        backdropFilter: 'blur(16px)',
        backgroundColor: tokens.colorNeutralBackgroundAlpha2,
        alignSelf: 'center',
        ...{
            ...shorthands.padding('0'),
            ...shorthands.overflow('auto'),
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
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            ...{
                ...shorthands.padding('16px'),
                ...shorthands.overflow('auto'),
            },
        },
        '&>.footer': {
            backgroundColor: tokens.colorNeutralBackgroundAlpha,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            ...{
                ...shorthands.padding('16px'),
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
    }
})


function StartPanelContentPinnedAppList() {
    return (
        <ul></ul>
    )
}

/**
 * Provides a profile avatar and a shutdown button
 */
function StartPanelContentNav() {
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
                <StartPanelContentPinnedAppList></StartPanelContentPinnedAppList>
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
                className={classes.startPanel + " start-panel" + (closing ? ' inactive' : ' active')}
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