<template>
  <div class="faq">
    <SectionTitle>
      <template #sub-title>faq</template>
      <template #dark-text>Ответы</template>
      <template #light-text> на вопросы</template>
    </SectionTitle>

    <Accordeon class="acc" />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../shared/SectionTitle.vue'
import Accordeon from './Accordeon.vue'
</script>

<style scoped lang="scss">
.faq {
  @include mixins.container;

  .acc {
    margin-top: 40px;
  }
}
</style>
