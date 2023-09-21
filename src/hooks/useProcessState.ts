import { useProcessId } from '@/hooks/useProcessId'

export type InfoProperties = {

    title: string

    icon: string

    /**
     * z-index
     */
    activeZIndex: number

}
export type WindowProperties = {

    /**
     * For template of components
     */
    info: InfoProperties

    position: PositionProperties

}
export type PositionProperties = {
    x: number
    y: number
}
export type AccessibilityProperties = {
    maximizable: boolean
    minimizable: boolean

    /**
     * Window maximize and minimize
     */
    maximize: boolean
    minimize: boolean

    /**
     * ?
     */
    focus: boolean

    /**
     * It is active while mousedown
     */
    active: boolean

}
export type ProcessProperties = {

    /**
     * The 'runningInBackgorund' and 'minimize' are not the same
     */
    runningInBackground: boolean

    /**
     * Unique process id
     */
    processId: number

}

export type ProcessState = {

    window: WindowProperties

    accessibility: AccessibilityProperties

    process: ProcessProperties

}


export function useProcessState(
    windowProps: {
        info: {
            title: string,
            icon: string
        },
        position?: {
            x: number,
            y: number
        },
    },
    accessibilityProps: {
        maximizable?: boolean
        minimizable?: boolean
    } = {
        maximizable: true,
        minimizable: true
    },
    processProps: {
        runningInBackground?: boolean,
        processId?: number,
    } = {
        runningInBackground: false,
        processId: useProcessId()
    }
): ProcessState {
    return ({
        window: {
            info: {
                title: windowProps.info.title,
                icon: windowProps.info.icon,
                activeZIndex: processProps.processId,
            },
            position: {
                x: windowProps.position?.x || 0,
                y: windowProps.position?.y || 0,
            },
        },
        accessibility: {
            maximizable: accessibilityProps.maximizable,
            minimizable: accessibilityProps.minimizable,
            focus: true,
            active: true,
            maximize: false,
            minimize: false,
        },
        process: {
            runningInBackground: processProps.runningInBackground,
            processId: processProps.processId,
        },
    })
}
