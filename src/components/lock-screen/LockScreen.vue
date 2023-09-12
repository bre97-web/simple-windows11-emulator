<template>
    <div class="full-screen flex flex-col items-center justify-center gap-16 backdrop-blur-md">

        <div class="avatar-panel bg-red-500"></div>

        <div class="space-y-8 flex flex-col items-center">
            <form class="flex items-center relative w-fit">
                <fluent-text-field appearance="filled" placeholder="Password">
                </fluent-text-field>
                <fluent-button class="absolute right-0 z-[1] p-0.5 grid place-content-center">
                    <span class="material-symbols-outlined md-icon">
                        arrow_forward
                    </span>
                </fluent-button>
            </form>
            <fluent-progress-ring></fluent-progress-ring>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>