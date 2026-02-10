<template>
  <div class="quality">
    <div class="content">
      <h2 class="sub-title">Преимущества</h2>
      <h1 class="title">Мы гарантируем качество <span>уже 10 лет</span></h1>

      <div class="cards">
        <left-card :position="1" class="card"></left-card>
        <right-card :position="2" class="card right"></right-card>
        <left-card :position="3" class="card"></left-card>
        <right-card :position="4" class="card right"></right-card>
        <left-card :position="5" class="card"></left-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftCard from './LeftCard.vue'
import RightCard from './RightCard.vue'
</script>

<style scoped lang="scss">
.quality {
  border-radius: 60px;
  background-color: variables.$color-accent-dark;

  .content {
    padding: 30px;
    @include mixins.container;

    .sub-title {
      @include mixins.text-title(22px);
      font-weight: 500;
      color: variables.$color-accent-light;
      text-transform: uppercase;
      padding-top: 20px;
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

      @media screen and (max-width: 360px) {
        font-size: 36px;
      }
    }

    .cards {
      display: flex;
      flex-direction: column;
      .card {
        width: 80%;
        margin-top: 30px;

        @media screen and (max-width: 500px) {
          width: 100%;
        }
      }

      .right {
        align-self: flex-end;
      }
    }
  }
}
</style>
