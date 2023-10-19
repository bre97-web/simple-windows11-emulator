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
import { Icon, IconButton, ScalingButton } from '@/components/fluent-ui/icon'
import { App } from 'vue'

export const registerGlobalComponents = {
    install: (app: App<Element>) => {
        app
            .component('ExpandLayout', ExpandLayout)
            .component('FixedLayout', FixedLayout)
            .component('FlexLayout', FlexLayout)
            .component('PageLayout', PageLayout)
            .component('StickyLayout', StickyLayout)
            .component('GridLayout', GridLayout)
            .component('Icon', Icon)
            .component('IconButton', IconButton)
            .component('ScalingButton', ScalingButton)
            
    },
}
