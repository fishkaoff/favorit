<template>
  <div class="home">
    <start-section />
    <WorkingStages class="section" />
    <OurWorks id="portfolio" />
    <AboutUs class="section" id="company" />
    <CatalogList class="section" id="catalog" />
    <HighQuality class="section" />
    <FaqBlock class="section" id="faq" />

    <AppForm class="container" id="form">
      <template #title>Остались вопросы?</template>
      <template #remark
        >Если вы заинтересованы в наших услугах или возникли вопросы, заполните форму и мы скоро с
        вами свяжемся</template
      ></AppForm
    >

    <AppFooter class="section" />
  </div>
</template>

<script setup lang="ts">
import StartSection from '@/components/start/StartSection.vue'
import WorkingStages from '@/components/stages/WorkingStages.vue'
import OurWorks from '@/components/portfolio/OurWorks.vue'
import AboutUs from '@/components/our-company/AboutUs.vue'
import CatalogList from '@/components/catalog/CatalogList.vue'
import HighQuality from '@/components/high-quality/HighQuality.vue'
import AppForm from '@/components/shared/AppForm.vue'
import AppFooter from '@/components/shared/AppFooter.vue'
import FaqBlock from '@/components/faq/FaqBlock.vue'
</script>

<style scoped lang="scss">
.section {
  margin-top: 40px;
}

.container {
  @include mixins.container;
  margin-top: 40px;
}
</style>
