<template>
    <GridLayout class="grid-cols-3 gap-2">
        <IconButton has-hover has-active>
            <div class="px-8 py-4 grid place-content-center">
                <Icon>wifi</Icon>
            </div>
        </IconButton>
        <IconButton has-hover has-active>
            <div class="px-8 py-4 grid place-content-center">
                <Icon>bluetooth</Icon>
            </div>
        </IconButton>
        <IconButton has-hover has-active>
            <div class="px-8 py-4 grid place-content-center">
                <Icon>air</Icon>
            </div>
        </IconButton>
        <NightLightNavigationButton></NightLightNavigationButton>
    </GridLayout>
</template>

<script setup lang="ts">
import NightLightNavigationButton from '@/components/control/night-light/NightLightNavigationButton.vue'

</script>
