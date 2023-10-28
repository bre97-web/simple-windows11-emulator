import { Tab, TabList, TabValue, makeStyles, shorthands, tokens } from "@fluentui/react-components"
import { useState } from "react"
import {
    PersonAccounts20Regular,
    Color20Regular,
    Games20Regular,
    PhoneUpdate20Regular
} from "@fluentui/react-icons"
import { Personalization } from "./panel/Personalization"

const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        ...{
            ...shorthands.padding('8px'),
            ...shorthands.overflow('clip')
        },
    },
    content: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: tokens.colorNeutralBackground1,
        ...{
            ...shorthands.overflow('auto')
        }
    }
})



export function Settings() {
    const classes = useStyles()

    const [selectedValue, setSelectedValue] = useState<TabValue>('account')

    return (
        <div className={classes.root}>
            <TabList
                selectedValue={selectedValue}
                onTabSelect={(_, data) => setSelectedValue(data.value)}
                vertical
                appearance="subtle"
            >
                <Tab
                    value={"account"}
                    icon={<PersonAccounts20Regular></PersonAccounts20Regular>}
                >Account
                </Tab>
                <Tab
                    value={"personalization"}
                    icon={<Color20Regular></Color20Regular>}
                >Personalization
                </Tab>
                <Tab
                    value={"gamig"}
                    icon={<Games20Regular></Games20Regular>}
                >Gaming
                </Tab>
                <Tab
                    value={"windows-update"}
                    icon={<PhoneUpdate20Regular></PhoneUpdate20Regular>}    
                >Windows Update</Tab>
            </TabList>

            <div className={classes.content}>
                { selectedValue === 'personalization' && <Personalization></Personalization>}
            </div>
        </div>
    )
}