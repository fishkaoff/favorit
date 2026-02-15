<template>
  <div class="container">
    <SectionTitle>
      <template #sub-title>карта</template>
      <template #dark-text>Как нас найти <br /></template>
    </SectionTitle>

    <div class="wrapper">
      <div class="cards">
        <div class="text">
          <div class="content">
            <h2 class="title">Нужна личная консультация?</h2>
            <p class="desc">
              Приходите к нам в офис, обусдим ваш бюджет, подберем проект и покажем материалы,
              абсолютно бесплатно.
            </p>
          </div>
        </div>

        <div class="text">
          <div class="content">
            <h2 class="title">г. Уфа, ул. Менделеева 219, офис 103</h2>
          </div>
        </div>
      </div>

      <div class="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af0500ac31e0c9d7a5d0cccc38c81c9ecd63aac3cd517efeeea901d86fb677c30&amp;source=constructor"
          width="100%"
          height="500"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../shared/SectionTitle.vue'
</script>

<style scoped lang="scss">
.container {
  @include mixins.container;

  .wrapper {
    margin-top: 50px;

    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    .map {
      flex: 1;
      min-width: 400px;
    }

    .cards {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 40px;

      .text {
        flex: 1;
        border-radius: 30px;
        background-color: variables.$color-accent-dark;

        display: flex;
        align-items: center;

        .content {
          padding: 30px;
          margin: 0 auto;

          .title {
            @include mixins.text-title(24px);
            font-weight: 600;
            color: variables.$color-main;
            text-align: center;
          }

          .desc {
            @include mixins.text-base(20px);
            color: variables.$color-accent-light;
            line-height: 1.4em;
            padding-top: 20px;
          }
        }
      }
    }
  }
}
</style>
