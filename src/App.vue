<template>

    <lock-screen></lock-screen>

    <div class="full-screen ">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import LockScreen from './components/lock-screen/LockScreen.vue';



const user = {
    name: 'NAME QAZ',
    password: '0'
}
</script>
