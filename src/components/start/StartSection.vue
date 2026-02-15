<template>
  <div class="start-section">
    <div class="content">
      <h1 class="title">Современные бани от 500 тыс. рублей</h1>
      <p class="text">строим современные бани по вашему индивидуальному проекту и под ваш бюджет</p>
      <div class="buttons">
        <app-button class="btn" @click="scrollToBlock('form')">
          <p class="iconed-btn">
            Оставить заявку
            <img :src="ArrowIcon" alt="вперед" class="btn-icon" />
          </p>
        </app-button>
        <bordered-button class="btn" @click="scrollToBlock('catalog')">
          <p class="iconed-btn">
            Скачать каталог
            <img :src="ArrowWhiteIcon" alt="вперед" class="btn-icon" />
          </p>
        </bordered-button>
      </div>
    </div>

    <img :src="BathHouse" alt="Баня" class="bath" />
  </div>
</template>

<script setup lang="ts">
import BathHouse from '@/assets/images/start-bath.png'
import AppButton from '../shared/AppButton.vue'
import ArrowIcon from '@/assets/images/arrow.svg'
import ArrowWhiteIcon from '@/assets/images/arrow-white.svg'
import BorderedButton from '../shared/BorderedButton.vue'
import { scrollToBlock } from '../helpers/helpers'
</script>

<style scoped lang="scss">
.start-section {
  @include mixins.container;
  margin-top: 150px;

  background-color: variables.$color-accent-light;
  border-radius: 30px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .content {
    flex: 1;
    padding: 60px;
    text-transform: uppercase;

    .title {
      @include mixins.text-title(50px);
      color: variables.$color-main;
      font-weight: 600;
      line-height: 1.2em;

      @media screen and (max-width: 500px) {
        font-size: 35px;
      }
    }

    .text {
      @include mixins.text-title(22px);
      color: variables.$color-main;
      line-height: 1.8em;
      font-weight: 500;

      padding-top: 50px;
    }

    .buttons {
      display: flex;
      gap: 70px;
      padding-top: 70px;

      .iconed-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .btn-icon {
          display: block;
        }
      }

      @media screen and (max-width: 650px) {
        display: block;
        padding-top: 20px;

        .btn {
          margin-top: 15px;
        }
      }
    }

    @media screen and (max-width: 500px) {
      padding: 20px;
    }
  }

  .bath {
    flex: 0 1 30%;
    display: block;
    width: 55%;

    @media screen and (max-width: 1368px) {
      width: 100%;
    }
  }
}
</style>
