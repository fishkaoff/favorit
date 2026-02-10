<template>
  <div class="navigation">
    <div class="prev">
      <img :src="AccentArrow" alt="Предыдущий" class="arrow" />
    </div>
    <div class="next">
      <img :src="AccentArrow" alt="Следующий" class="arrow" />
    </div>
  </div>

  <div class="slider">
    <swiper
      :modules="modules"
      :space-between="50"
      :speed="1600"
      :navigation="{
        nextEl: '.next',
        prevEl: '.prev',
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :breakpoints="breakpoints"
    >
      <slot />
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'

import AccentArrow from '@/assets/images/accent-arrow.png'

const modules = [Navigation, Autoplay]

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 2.7,
  },
}
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  gap: 20px;
  justify-content: end;
  padding: 20px 0;

  .prev .arrow {
    rotate: 180deg;
  }

  .prev,
  .next {
    transition: all 0.7s;
    cursor: pointer;
  }

  .prev:hover,
  .next:hover {
    scale: 1.2;
  }
}

.slider {
  :deep(.swiper-wrapper) {
    align-items: stretch;
  }

  :deep(.swiper-slide) {
    display: flex;
    height: auto;
  }
}
</style>
