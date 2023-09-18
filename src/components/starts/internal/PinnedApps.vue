<template>
    <GridLayout class="relative gap-1 grid-cols-4 md:grid-cols-6 grid-rows-auto overflow-y-auto h-40 pt-2 items-center">
        <div class="app shape relative">
            <md-ripple></md-ripple>

            <div class="w-full h-full active:scale-75 transition-all">
                <FlexLayout class="flex-col items-center justify-around pt-2">
                    <div class="h-8">
                        <md-icon>settings</md-icon>
                    </div>
                    <LabelSmall class="select-none">Settings</LabelSmall>
                </FlexLayout>
            </div>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
        <div class="app shape relative">
            <md-ripple></md-ripple>
        </div>
    </GridLayout>
</template>

<script setup lang="ts">

</script>

<style scoped>

.app {
    /* width: 3.5rem; */
    height: 4.5rem;
    aspect-ratio: 1.125 / 1;
}
</style>