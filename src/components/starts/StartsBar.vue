<template>
    <div class="relative w-full h-12 border-t border-black/20 back-blur p-1">

        <!-- No need gap -->
        <FlexLayout class="relative w-full h-full items-center justify-between overflow-clip">

            <div class="flex-none w-1/4 flex justify-start"></div>

            <div class="flex-none relative w-2/4 h-full duration-1000 transition-all flex gap-1 justify-center items-center overflow-auto">
                <!-- StartButton -->
                <Starts></Starts>

                <MinimizeApps></MinimizeApps>
            </div>
            
            <div class="flex-none w-1/4 h-full flex justify-end">
                <Naviagtion></Naviagtion>
            </div>

        </FlexLayout>
        
    </div>
</template>

<script setup lang="ts">
import Starts from '@/components/starts/internal/Starts.vue';
import Naviagtion from '@/components/control/Navigation.vue';
import MinimizeApps from './internal/MinimizeApps.vue';

</script>
