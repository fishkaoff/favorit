<template>
  <div class="header">
    <div class="wrapper">
      <img :src="LogoIcon" alt="Фаворит" class="logo" />

      <ul class="nav">
        <li class="nav-item"><a href="#" class="nav-link">Портфолио</a></li>
        <li class="nav-item"><a href="#" class="nav-link">О нас</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Каталог</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FaQ</a></li>
      </ul>

      <p class="phone">8 (937) 586-66-26</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from '@/assets/images/logo.png'
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

      @media screen and (max-width: 400px) {
        width: 80px;
      }
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
        }

        .nav-link:hover {
          color: variables.$color-accent;
        }
      }

      @media screen and (max-width: 965px) {
        display: none;
      }
    }

    .phone {
      @include mixins.text-base(24px);
      color: variables.$color-accent-light;

      @media screen and (max-width: 550px) {
        font-size: 16px;
      }
    }

    @media screen and (max-width: 400px) {
      padding: 20px 40px;
    }
  }
}
</style>
