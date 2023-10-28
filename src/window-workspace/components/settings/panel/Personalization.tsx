import { setIsDarkEnabled } from "@/store/themeSlice"
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel, Combobox, Option } from "@fluentui/react-components"
import { useDispatch, useSelector } from "react-redux"

export function Personalization() {
    const isDarkEnabled = useSelector(state => state.theme.isDarkEnabled)
    const dispatch = useDispatch()

    return (
        <>
            <Accordion
                multiple
                collapsible
            >
                <AccordionItem value={1}>
                    <AccordionHeader>Theme Mode</AccordionHeader>
                    <AccordionPanel>
                        <Combobox
                            defaultValue={isDarkEnabled ? 'Dark' : 'Light'}
                            onOptionSelect={(_, data) => dispatch(setIsDarkEnabled(data.optionValue === 'Dark'))}
                        >
                            <Option value={"Light"}>
                                Light
                            </Option>
                            <Option value="Dark">
                                Dark
                            </Option>
                        </Combobox>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem value={2}>
                    <AccordionHeader>Primary Color</AccordionHeader>
                    <AccordionPanel>
                        {}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}