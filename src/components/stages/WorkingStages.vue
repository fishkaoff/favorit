<template>
    <div class="stages">
        <div class="content">
            <h2 class="sub-title">Этапы работ</h2>
            <h1 class="title">Основные стадии <span>при строительстве</span></h1>


            <div class="cards">
                <card :style="'dark'" :position="1" class="card" />
                <card :style="'light'" :position="2" class="card" />
                <card :style="'dark'" :position="3" class="card" />
                <card :style="'light'" :position="4" class="card" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>

<style scoped lang="scss">
.stages {
    border-radius: 60px;
    background-color: variables.$color-accent-dark;

    .content {
        @include mixins.container;
        padding-bottom: 50px;

        .sub-title {
            @include mixins.text-title(22px);
            font-weight: 500;
            padding-top: 50px;
            color: variables.$color-accent-light;
            text-transform: uppercase;
        }

        .title {
            @include mixins.text-title(50px);
            font-weight: 500;
            padding-top: 20px;
            text-transform: uppercase;

            color: variables.$color-secondary;

            span {
                color: variables.$color-accent-light;
            }

            @media screen and (max-width: 600px) {
                font-size: 40px;
                line-height: 1.5em;
            }
        }

        .cards {
            margin-top: 60px;

            .card:not(:first-of-type) {
                margin-top: 40px;
            }
        }
    }
}
</style>