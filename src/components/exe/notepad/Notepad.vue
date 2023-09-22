<template>
    <PageLayout>
        <div class="relative overflow-clip p-2 h-full">
            <header>
                <TitleLarge>Notepad Beta</TitleLarge>
            </header>

            <div class="w-full h-full rounded overflow-clip">
                <fluent-text-area
                    autofocus
                    placeholder="Notepad beta, type here."
                    resize="vertical"
                    appearance="outline"
                    class="w-full h-full"
                ></fluent-text-area>
            </div>
        </div>
    </PageLayout>

</template>

<script setup lang="ts">


</script>

<style scoped>

</style>