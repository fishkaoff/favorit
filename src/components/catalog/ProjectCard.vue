<template>
  <div class="project-card" :style="{ backgroundImage: `url(${image})` }">
    <div class="content">
      <div class="text">
        <h2 class="title">{{ title }}</h2>
        <p class="size">Размеры: {{ size }}</p>
      </div>

      <app-button class="btn" @click="scrollToBlock('catalog-form')">Узнать стоимость</app-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/shared/AppButton.vue'
import { scrollToBlock } from '../helpers/helpers'
defineProps<{
  image: string
  title: string
  size: string
}>()
</script>

<style scoped lang="scss">
.project-card {
  min-height: 400px;
  border-radius: 30px;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: flex-end;

  .content {
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: space-between;

    .text {
      .title {
        @include mixins.text-title(30px);
        color: variables.$color-main;
        font-weight: 600;
      }

      .size {
        @include mixins.text-base(22px);
        color: variables.$color-main;
        padding-top: 10px;
      }
    }

    .btn {
      max-width: 300px;
    }

    @media screen and (max-width: 450px) {
      gap: 20px;
    }
  }
}
</style>
