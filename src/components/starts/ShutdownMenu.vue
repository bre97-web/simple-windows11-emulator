<template>
    <ExpandLayout>
        <template v-slot:actions="{ isExpanded, setIsExpanded }">
            <md-icon-button @click="setIsExpanded(!isExpanded)">
                <md-icon>power_settings_new</md-icon>
            </md-icon-button>
        </template>
        <template v-slot:expanded-content="{ isExpanded, setIsExpanded }">
            <div
                class="relative z-0"
                :class="[isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none']"
            >
                <fluent-menu class="absolute bottom-10 right-0 w-32 z-0">
                    <fluent-menu-item>Sleep</fluent-menu-item>
                    <fluent-menu-item>Shut down</fluent-menu-item>
                    <fluent-menu-item>Restart</fluent-menu-item>
                </fluent-menu>
                <div
                    v-show="isExpanded"
                    @click="setIsExpanded(false)"
                    class="fixed full-screen top-0 right-0 -z-[1]"
                ></div>
            </div>
        </template>
    </ExpandLayout>
</template>

<script setup lang="ts">

</script>

<style scoped></style>