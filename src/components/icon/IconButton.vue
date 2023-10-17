<template>
   <div 
        :class="[
            props.hasHover ? 'icon-has-hover' : '',
            props.hasShape ? 'rounded-control overflow-clip' : '',
            props.type === 'default' ? 'hover:bg-white/75 dark:hover:bg-black/75' : 'hover:bg-error-500/75'
        ]"
    >
        <div
            :class="[
                props.hasActive ? 'icon-has-active' : '',
                props.hasFilled ? 'icon-has-filled' : '',
            ]"
            class="transition-all grid place-content-center w-full h-full"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    hasHover?: boolean
    hasActive?: boolean
    hasFilled?: boolean
    hasShape?: boolean
    type?: "default" | "error"
}>(), {
    hasHover: false,
    hasActive: false,
    hasFilled: false,
    hasShape: true,
    type: "default"
})
</script>

<style scoped>
.icon {
    aspect-ratio: auto;
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