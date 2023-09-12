<template>
    <div class="grid">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>