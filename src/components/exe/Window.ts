import { App, Component, ComputedOptions, MethodOptions, createApp, h } from "vue"
import T from './WindowTemplate.vue'

/**
 * Create el
 */
const createMountRoot = () => document.body.appendChild(document.createElement('div'))
/**
 * Create a Vue instant
 */

const createWindowApp = (container: Component<any, any, any, ComputedOptions, MethodOptions>) => {
    const el = createMountRoot()
    const createMyApp = () => createApp(h(container))
    var app: App<Element>

    /**
     * Init app and mount
     */
    const mount = () => {
        app = createMyApp()
        app.mount(el)
    }

    /**
     * Kill the instance
     */
    const destroy = () => {
        if (app) {
            app.unmount()
        }
        el.remove()
    }

    // onBeforeUnmount(() => {
    //     destroy();
    // })

    return {
        mount,
        destroy,
        app
    }


}

export function useWindow(title = 'Untitled Window', Slot: any) {
    /**
     * Vue component instance
     */
    const instance = createWindowApp(h(T, {
        onClose: () => {
            instance.destroy()
        },
        props: {
            title: title
        },
    }, {
        default: () => h(Slot),
    }))

    return {
        instance
    }
}

