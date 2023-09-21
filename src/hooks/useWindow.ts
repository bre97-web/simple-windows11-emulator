import { App, Component, ComputedOptions, MethodOptions, createApp, h } from "vue"
import WindowTemplate from '@/hooks/internal/WindowTemplate.vue'
import { ProcessState } from "./useProcessState"

/**
 * Global Components.
 * It's some Unit Text.
 */
import DisplayLarge from '@/typography/DisplayLarge.vue'
import DisplayMedium from '@/typography/DisplayMedium.vue'
import DisplaySmall from '@/typography/DisplaySmall.vue'
import HeadlineLarge from '@/typography/HeadlineLarge.vue'
import HeadlineMedium from '@/typography/HeadlineMedium.vue'
import HeadlineSmall from '@/typography/HeadlineSmall.vue'
import TitleLarge from '@/typography/TitleLarge.vue'
import TitleMedium from '@/typography/TitleMedium.vue'
import TitleSmall from '@/typography/TitleSmall.vue'
import LabelLarge from '@/typography/LabelLarge.vue'
import LabelMedium from '@/typography/LabelMedium.vue'
import LabelSmall from '@/typography/LabelSmall.vue'
import BodyLarge from '@/typography/BodyLarge.vue'
import BodyMedium from '@/typography/BodyMedium.vue'
import BodySmall from '@/typography/BodySmall.vue'

/**
 * Global Components.
 * Those components are layouts.
 */
import ExpandLayout from '@/layouts/ExpandLayout.vue'
import FixedLayout from '@/layouts/FixedLayout.vue'
import FlexLayout from '@/layouts/FlexLayout.vue'
import PageLayout from '@/layouts/PageLayout.vue'
import StickyLayout from '@/layouts/StickyLayout.vue'
import GridLayout from '@/layouts/GridLayout.vue'


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

    instance
    .component('DisplayLarge', DisplayLarge)
    .component('DisplayMedium', DisplayMedium)
    .component('DisplaySmall', DisplaySmall)
    .component('HeadlineLarge', HeadlineLarge)
    .component('HeadlineMedium', HeadlineMedium)
    .component('HeadlineSmall', HeadlineSmall)
    .component('TitleLarge', TitleLarge)
    .component('TitleMedium', TitleMedium)
    .component('TitleSmall', TitleSmall)
    .component('LabelLarge', LabelLarge)
    .component('LabelMedium', LabelMedium)
    .component('LabelSmall', LabelSmall)
    .component('BodyLarge', BodyLarge)
    .component('BodyMedium', BodyMedium)
    .component('BodySmall', BodySmall)
    .component('ExpandLayout', ExpandLayout)
    .component('FixedLayout', FixedLayout)
    .component('FlexLayout', FlexLayout)
    .component('PageLayout', PageLayout)
    .component('StickyLayout', StickyLayout)
    .component('GridLayout', GridLayout)
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

