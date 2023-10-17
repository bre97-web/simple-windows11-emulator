<template>
    <div class="relative w-full h-12 border-t border-black/20 back-blur bg-white/25 dark:bg-black/75 p-1">

        <!-- No need gap -->
        <FlexLayout class="relative w-full h-full items-center justify-between overflow-clip">

            <div class="hidden flex-initial w-1/4 md:block h-full self-start overflow-auto"></div>

            <div class="relative h-full flex-1 duration-1000 transition-all overflow-clip">
                <FlexLayout class="h-full items-center justify-start md:justify-center gap-1">
                    <!-- StartButton -->
                    <Starts></Starts>
                    
                    <MinimizeApps></MinimizeApps>
                </FlexLayout>
            </div>
            
            <div class="flex-none w-fit md:w-1/4 h-full flex justify-end">
                <Naviagtion></Naviagtion>
            </div>

        </FlexLayout>
        
    </div>
</template>

<script setup lang="ts">
import Starts from '@/components/starts/internal/Starts.vue';
import Naviagtion from '@/components/starts/navigation/Navigation.vue';
import MinimizeApps from './internal/MinimizeApps.vue';

</script>
