<template>
  <div class="header">
    <div class="wrapper">
      <img :src="LogoIcon" alt="Фаворит" class="logo" />

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

      <p class="phone">8 (937) 586-66-26</p>

      <div class="burger-btn" @click="() => (opened = !opened)">
        <img :src="burgerIcon" alt="Меню" class="burger-icon" />
      </div>

      <div class="burger-nav" :class="opened ? 'active' : ''">
        <div class="close-btn" @click="opened = false">
          <img :src="CloseIcon" alt="Закрыть" class="close-icon" />
        </div>
        <ul>
          <li class="nav-item">
            <p @click="scrollToBlock('portfolio')" class="nav-link">Портфолио</p>
          </li>
          <li class="nav-item"><p @click="scrollToBlock('company')" class="nav-link">О нас</p></li>
          <li class="nav-item">
            <p @click="scrollToBlock('catalog-form')" class="nav-link">Каталог</p>
          </li>
          <li class="nav-item"><p @click="scrollToBlock('faq')" class="nav-link">FaQ</p></li>
          <li class="nav-item"><p class="nav-link">8 (937) 586-66-26</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from '@/assets/images/logo.png'
import { scrollToBlock } from '../helpers/helpers'
import burgerIcon from '@/assets/images/burger.svg'
import CloseIcon from '@/assets/images/close.svg'
import { ref } from 'vue'

const opened = ref(false)
</script>

<style scoped lang="scss">
.header {
  @include mixins.container;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 70px;
    margin-top: 30px;

    background-color: variables.$color-accent-dark;
    border-radius: 70px;

    .logo {
      width: 120px;
      height: auto;
    }

    .nav {
      display: flex;
      justify-content: space-between;

      .nav-item:not(:first-of-type) {
        padding-left: 50px;
      }

      .nav-item {
        .nav-link {
          @include mixins.text-base(24px);
          color: variables.$color-accent-light;

          transition: all 0.5s;
          cursor: pointer;
        }

        .nav-link:hover {
          color: variables.$color-accent;
        }
      }
    }

    .phone {
      @include mixins.text-base(24px);
      color: variables.$color-accent-light;
    }

    .burger-btn {
      display: none;

      .burger-icon {
        width: 50px;
      }
    }

    .burger-nav {
      display: none;
      position: absolute;
      top: 50px;
      right: 0;
      background-color: variables.$color-accent-dark;
      border-radius: 30px;

      &.active {
        display: block;
      }

      .close-btn {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;

        .close-icon {
          display: block;
          padding: 30px 30px 0 0;
        }
      }

      ul {
        padding: 0 50px 50px 50px;

        .nav-item {
          padding: 30px;

          .nav-link {
            @include mixins.text-base(24px);
            color: variables.$color-accent-light;

            transition: all 0.5s;
            cursor: pointer;
          }

          .nav-link:hover {
            color: variables.$color-accent;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 930px) {
  .header {
    .wrapper {
      .nav,
      .phone {
        display: none;
      }

      .burger-btn {
        display: block;
      }
    }
  }
}
</style>
