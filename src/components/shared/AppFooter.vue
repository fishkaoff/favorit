<template>
  <div class="footer">
    <div class="content">
      <div class="col company">
        <h1 class="title">ООО ТПП "Альянс Групп"</h1>
        <div class="items">
          <p class="item">
            Адрес: 450071, Республика Башкортостан, г. Уфа, ул Менделеева, д. 219, офис 212В
          </p>
          <p class="item">ИНН: 1659208475</p>
          <p class="item">КПП: 027601001</p>
          <p class="item">ОГРН: 1201600035229</p>
          <p class="item">Телефон: 89375866626</p>
          <p class="item">Email: alyans219@mail.ru</p>
        </div>
      </div>

      <div class="col pages">
        <h1 class="title">Страницы</h1>
        <ul class="nav">
          <li class="nav-item">
            <p @click="scrollToBlock('portfolio')" class="nav-link">Портфолио</p>
          </li>
          <li class="nav-item"><p @click="scrollToBlock('company')" class="nav-link">О нас</p></li>
          <li class="nav-item">
            <p @click="scrollToBlock('catalog-form')" class="nav-link">Каталог</p>
          </li>
          <li class="nav-item"><p @click="scrollToBlock('faq')" class="nav-link">FaQ</p></li>
        </ul>
      </div>

      <div class="col documents">
        <h1 class="title">Нормативные документы</h1>
        <div class="items">
          <router-link to="" class="item">Политика конфиденциальности</router-link>
          <router-link to="" class="item">Пользовательское соглашение</router-link>
          <router-link to="" class="item">Согласие на рекламную рассылку</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollToBlock } from '../helpers/helpers'
</script>

<style scoped lang="scss">
.footer {
  background-color: variables.$color-accent-dark;
  border-radius: 30px 30px 0 0;

  .content {
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .col {
      flex: 1;
      min-width: 300px;
      padding-top: 30px;

      &.company {
        color: variables.$color-main;

        .title {
          @include mixins.text-title(24px);
          font-weight: 600;
        }

        .items {
          padding-top: 15px;

          .item {
            margin-top: 15px;
            @include mixins.text-base(18px);
          }
        }

        @media screen and (max-width: 680px) {
          text-align: center;
        }
      }

      &.pages {
        text-align: center;

        .title {
          @include mixins.text-title(24px);
          font-weight: 600;
          color: variables.$color-main;
        }

        .nav {
          padding-top: 15px;

          .nav-item {
            @include mixins.text-base(18px);
            color: variables.$color-main;
            cursor: pointer;

            .nav-link {
              padding-top: 20px;
            }
          }
        }

        @media screen and (max-width: 680px) {
          text-align: center;
        }
      }

      &.documents {
        color: variables.$color-main;
        text-align: right;

        .title {
          @include mixins.text-title(24px);
          font-weight: 600;
        }

        .items {
          padding-top: 15px;

          .item {
            display: block;
            @include mixins.text-base(18px);
            margin-top: 15px;
            color: variables.$color-main;
          }
        }

        @media screen and (max-width: 680px) {
          text-align: center;
        }
      }
    }
  }
}
</style>
