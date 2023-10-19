import { allComponents, provideFluentDesignSystem } from '@fluentui/web-components'

provideFluentDesignSystem()
    .register(allComponents)
    .withDesignTokenRoot(document.body)