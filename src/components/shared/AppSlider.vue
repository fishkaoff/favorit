<template>
    <div class="navigation">
        <div class="prev">
            <img :src="AccentArrow" alt="Предыдущий" class="arrow">
        </div>
        <div class="next">
            <img :src="AccentArrow" alt="Следующий" class="arrow">
        </div>
    </div>
    <div class="slider">
        <swiper :slides-per-view="2.7" :space-between="50" :modules="modules" :speed="1600" :navigation="{
            nextEl: '.next',
            prevEl: '.prev',
        }" :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }">
            <slot></slot>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

import AccentArrow from '@/assets/images/accent-arrow.png'

const modules = [Navigation, Autoplay]
</script>

<style scoped lang="scss">
.navigation {
    display: flex;
    gap: 20px;
    justify-content: end;

    padding: 20px 0 20px 0;


    .prev {
        .arrow {
            rotate: 180deg;
        }
    }


    .prev,
    .next {
        transition: all .7s;
    }

    .prev:hover,
    .next:hover {
        scale: 1.2;
        cursor: pointer;
    }

}
</style>