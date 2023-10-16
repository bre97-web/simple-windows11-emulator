import { App, Component, ComputedOptions, MethodOptions, createApp, h } from "vue"
import WindowTemplate from '@/hooks/internal/WindowTemplate.vue'
import { ProcessState } from "./useProcessState"
import { registerGlobalComponents } from "@/scripts/registerGlobalComponents"

export type Process = {

    /**
     * Mount process and render a window
     */
    mount: () => void

    /**
     * Kill the process and close the window
     */
    unmount: () => void

    instance: App<Element>

    getProcessStateInstance: () => ProcessState
}

/**
 * Create el
 */
const createMountRoot = () => document.getElementById('window-workspace').appendChild(document.createElement('div'))

/**
 * Create a Vue instant
 */
const createWindowApp = (container: Component<any, any, any, ComputedOptions, MethodOptions>) => {
    const el = createMountRoot()
    const instance: App<Element> = createApp(container)

    instance.use(registerGlobalComponents)

    const mount = () => {
        instance.mount(el)
    }
    const unmount = () => {
        if (instance) {
            instance.unmount()
            el.remove()
        }
    }

    return {
        mount,
        unmount,
        instance
    }

}

export function useWindow(getProcessStateInstance: () => ProcessState, props: {}, slot: any): Process {
    /**
     * Vue component instance: * Vue component instance
     */
    // @ts-ignore
    const instance = createWindowApp(h(WindowTemplate, {}, {
        default: () => h(slot),
    }))

    instance.instance._component.props = {
        ...props,
        getProcessStateInstance,
    }

    return {
        ...instance,
        getProcessStateInstance
    }
}

