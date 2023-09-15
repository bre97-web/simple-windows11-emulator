<template>
    <div class="relative w-full h-12 element-border back-blur p-1">

        <!-- No need gap -->
        <FlexLayout class="relative w-full h-full items-center justify-between overflow-clip">

            <div class="flex-none w-1/4 flex justify-start"></div>

            <!-- StartButton -->
            <StartsButton></StartsButton>
            
            <div class="flex-none w-1/4 h-full flex justify-end">
                <Naviagtion></Naviagtion>
            </div>

        </FlexLayout>


    </div>
</template>

<script setup lang="ts">
import StartsButton from './StartsButton.vue';

import Naviagtion from '@/components/control/Navigation.vue';



</script>

<style lang="css" scoped>

</style>