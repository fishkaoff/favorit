<template>
    <div class="home">
        <start-section />
        <WorkingStages class="section" />
        <OurWorks />
        <AboutUs class="section" />
    </div>
</template>

<script setup lang="ts">
import StartSection from '@/components/start/StartSection.vue';
import WorkingStages from '@/components/stages/WorkingStages.vue';
import OurWorks from '@/components/portfolio/OurWorks.vue';
import AboutUs from '@/components/our-company/AboutUs.vue';
</script>

<style scoped lang="scss">
.section {
    margin-top: 40px;
}
</style>