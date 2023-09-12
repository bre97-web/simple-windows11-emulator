import { NavigationTab } from "@material/web/labs/navigationtab/internal/navigation-tab"

export type MDDialog = {
    show: () => void
    close: () => void
} & HTMLElement

export type MDTextField = {
    value: string
} & HTMLElement

export type MDButton = {
    value: string
} & HTMLElement

export type MDNavigationBar = {
    activeIndex: number
    hideInactiveLabels: boolean
    tabs: NavigationTab[]
} & HTMLElement
