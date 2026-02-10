<template>
  <div class="about-us">
    <div class="container">
      <div class="tab">
        <h3 class="tab-title">Наша компания</h3>

        <div class="cols">
          <div class="builder-image">
            <img :src="BuilderImage" alt="" class="img" />
          </div>

          <div class="about-col">
            <div class="card">
              <div class="content">
                <h1 class="title">
                  СК «Фаворит» <span>- меняем представление о строительстве бань</span>
                </h1>

                <p class="description">
                  Мы используем передовые модульные технологии, чтобы предложить вам готовое решение
                  «под ключ» в рекордные сроки.
                </p>

                <AppButton class="get-more" @click="scrollToBlock('form')">Узнать больше</AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <app-form class="form">
        <template #title>Остались вопросы?</template>
        <template #remark
          >Если вы заинтересованы в наших услугах или возникли вопросы, заполните форму и мы скоро с
          вами свяжемся</template
        >
      </app-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import BuilderImage from '@/assets/images/builder.png'
import AppButton from '../shared/AppButton.vue'
import AppForm from '../shared/AppForm.vue'
import { scrollToBlock } from '../helpers/helpers'
</script>

<style scoped lang="scss">
.about-us {
  background-color: variables.$color-accent-dark;
  border-radius: 30px;

  .container {
    @include mixins.container;
    padding: 50px 0;

    .form {
      margin-top: 40px;
    }

    .tab {
      border-radius: 30px;
      background: url('@/assets/images/forest.jpg') no-repeat center top;

      .tab-title {
        display: inline-block;
        padding: 20px;
        border-radius: 0 0 30px 0;

        @include mixins.text-title(22px);
        font-weight: 500;
        text-transform: uppercase;

        color: variables.$color-accent-light;
        background-color: variables.$color-accent-dark;
      }

      .cols {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .builder-image {
          flex: 1;
          min-width: 500px;

          padding: 50px;

          .img {
            width: 100%;
            display: block;
          }

          @media screen and (max-width: 500px) {
            min-width: 200px;
          }
        }

        .about-col {
          flex: 1;
          padding: 50px;

          .card {
            background-color: variables.$color-accent-dark;
            border-radius: 30px;

            .content {
              padding: 30px;

              .title {
                @include mixins.text-title(30px);
                font-weight: bold;
                color: variables.$color-accent-light;

                span {
                  @include mixins.text-base(22px);
                  color: variables.$color-main;
                  line-height: 1.5em;
                }
              }

              .description {
                margin-top: 15px;
                @include mixins.text-base(22px);
                color: variables.$color-main;
                line-height: 1.5em;
              }

              .get-more {
                margin-top: 30px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
