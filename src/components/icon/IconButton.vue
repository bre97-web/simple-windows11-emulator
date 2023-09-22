<template>
   <div 
        :class="[
            props.hasHover ? 'icon-has-hover' : '',
            props.hasShape ? 'rounded overflow-clip' : '',
        ]"
        class="p-2"
    >
        <Icon
            :class="[
                props.hasActive ? 'icon-has-active' : '',
                props.hasFilled ? 'icon-has-filled' : '',
            ]"
            class="transition-all"
        >
            <slot></slot>
        </Icon>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    hasHover?: boolean
    hasActive?: boolean
    hasFilled?: boolean
    hasShape?: boolean
}>(), {
    hasHover: false,
    hasActive: false,
    hasFilled: false,
    hasShape: true,
})
</script>

<style scoped>
.icon {
    aspect-ratio: auto;
    display: grid;
    place-content: center;
}

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

.icon-has-active:active {
    scale: 0.75;
}

.icon-has-hover:hover {
    background-color: rgb(255 255 255 / 0.75);
}

.icon-has-hover:hover[type="error"],
.icon-has-hover:hover [type="error"] {
    background-color: var(--md-sys-color-error-container);
}

.icon-has-filled {
    font-variation-settings: 'FILL' 1;
    animation: icon-fill 0.15s ease-in;
}

@keyframes icon-fill {
    from {
        font-variation-settings: 'FILL' 0;
    }

    to {
        font-variation-settings: 'FILL' 1;
    }
}
</style>