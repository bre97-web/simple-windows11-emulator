import { App, Component, ComputedOptions, MethodOptions, createApp, h, ref } from "vue"
import WindowTemplate from '@/hooks/internal/WindowTemplate.vue'

/**
 * Create el
 */
const createMountRoot = () => document.getElementById('window-workspace').appendChild(document.createElement('div'))

/**
 * Create a Vue instant
 */
const createWindowApp = (container: Component<any, any, any, ComputedOptions, MethodOptions>) => {
    const el = createMountRoot()
    const createMyApp = () => createApp(container)
    var instance: App<Element> = createMyApp()

    const mount = () => {
        instance.mount(el)
    }
    const unmount = () => {
        if (instance) {
            instance.unmount()
        }
        el.remove()
    }

    return {
        mount,
        unmount,
        instance
    }


}

export function useWindow(props: {}, slot: any): {
    mount: () => void
    unmount: () => void
    instance: App<Element>
} {
    /**
     * Vue component instance
     */
    // @ts-ignore
    
    const instance = createWindowApp(h(WindowTemplate, {}, {
        default: () => h(slot),
    }))

    const windowState = ref({
        focus: false,
        active: false,
        maximize: false,
        runningInBackground: false,
        position: {
            x: 0,
            y: 0,
        },
        activeZIndex: 0
    })

    instance.instance._component.props = {
        ...props,
        windowState,
        onClose: () => {
            instance.unmount()
        },
        onMaximize: () => {
            windowState.value.maximize = !windowState.value.maximize

            if(!windowState.value.maximize) {
                const windowRef: HTMLElement = instance.instance._container.children.item(0) as HTMLElement
                windowRef.style.left = windowState.value.position.x + 'px'
                windowRef.style.top = windowState.value.position.y + 'px'
            }
        },
        onFocus: () => {
            windowState.value.focus = true
        },
        onUnfocus: () => {
            windowState.value.focus = false
        },
        onActive: () => {
            windowState.value.active = true
        },
        onInactive: () => {
            windowState.value.active = false
        },
        onGragwindow: (e: MouseEvent) => {
            if(windowState.value.maximize) return false

            const windowRef: HTMLElement = instance.instance._container.children.item(0) as HTMLElement

            // 计算鼠标距离弹出框内的位置
            const position = {
                x: e.clientX - windowRef.offsetLeft,
                y: e.clientY - windowRef.offsetTop
            }
            
            document.onmousemove = (e: MouseEvent) => {
                const currentDisPostion = {
                    x: 0,
                    y: 0
                }

                // 弹出框dialog距离窗口左上角的水平和纵向距离
                currentDisPostion.x = e.clientX - position.x
                currentDisPostion.y = e.clientY - position.y

                if (currentDisPostion.x < 0) {
                    currentDisPostion.x = 0
                } else if (currentDisPostion.x > document.documentElement.clientWidth - windowRef.offsetWidth) {
                    currentDisPostion.x = document.documentElement.clientWidth - windowRef.offsetWidth
                }

                // if(currentDialogDisY < 0) {
                //   currentDialogDisY = 0
                // } else if (currentDialogDisY > document.documentElement.clientHeight - windowRef.offsetHeight) {
                //   currentDialogDisY = document.documentElement.clientHeight - windowRef.offsetHeight
                // }

                windowState.value.position.x = currentDisPostion.x
                windowState.value.position.y = currentDisPostion.y

            }

            document.onmouseup = () => {
                document.onmousemove = null
                document.onmouseup = null
            }

            return false
        }

    }
    return instance
}

