<template>
    <div class="portfolio">
        <SectionTitle>
            <template #sub-title>Портфолио</template>
            <template #dark-text>Представляем вам </template>
            <template #light-text>наши работы</template>
        </SectionTitle>

        <AppSlider class="slider">
            <swiper-slide>
                <img :src="Case1" alt="" class="case-item">
            </swiper-slide>

            <swiper-slide>
                <img :src="Case2" alt="" class="case-item">
            </swiper-slide>

            <swiper-slide>
                <img :src="Case3" alt="" class="case-item">
            </swiper-slide>
            <swiper-slide>
                <img :src="Case3" alt="" class="case-item">
            </swiper-slide>
        </AppSlider>
    </div>
</template>

<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import SectionTitle from '../shared/SectionTitle.vue';
import AppSlider from '../shared/AppSlider.vue';

import Case1 from '@/assets/images/case-01.png'
import Case2 from '@/assets/images/case-02.png'
import Case3 from '@/assets/images/case-03.png'
</script>

<style scoped lang="scss">
.portfolio {
    @include mixins.container;

    .slider {
        margin-top: 50px;

        .case-item {
            width: 500px;
            height: 450px;
            border-radius: 30px;
            transition: scale .7s;
        }
    }
}
</style>