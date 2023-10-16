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
import Icon from '@/components/icon/Icon.vue'
import IconButton from '@/components/icon/IconButton.vue'

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
            
    },
}
