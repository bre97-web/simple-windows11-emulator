import { Textarea, TextareaProps, makeStyles, shorthands } from "@fluentui/react-components"
import { useState } from "react"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        ...{
            ...shorthands.padding('8px'),
        },
    },
})

function TextArea() {
    const [value,setValue] = useState('')

    const onInputEvent: TextareaProps["onChange"] = (_, data) => () => {
        setValue(data.value)
    }

    return (
        <Textarea
            appearance="outline"
            placeholder="Type here"
            resize="vertical"
            size="large"
            onChange={onInputEvent}
            defaultValue={value}
        ></Textarea>
    )
}

function Context() {
    const classes = useStyles()

    return (
        <div
            className={classes.root}
        >
            <TextArea></TextArea>
        </div>
    )
}

export function Notepad() {
    return (
        <Context></Context>
    )
}