<template>
  <div class="card light">
    <div class="content">
      <h1 class="position">{{ position }}</h1>
      <div class="wrapper">
        <h2 class="title">Название преимущества</h2>
        <p class="text">
          абра кадабра тут текст абра кадабра тут текст абра кадабра тут текст абра кадабра тут
          текст абра кадабра тут текст
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  position: number
}>()
</script>

<style scoped lang="scss">
.card {
  border-radius: 30px;

  .content {
    display: flex;
    align-items: center;
    gap: 30px;

    padding: 25px;

    .position {
      @include mixins.text-title(100px);
      font-weight: 800;
      color: variables.$color-accent-dark;
    }

    .wrapper {
      .title {
        @include mixins.text-title(28px);
        font-weight: 500;
        color: variables.$color-secondary;

        @media screen and (max-width: 360px) {
          font-size: 24px;
        }
      }

      .text {
        @include mixins.text-base(22px);
        color: variables.$color-accent-dark;
        padding-top: 20px;

        @media screen and (max-width: 360px) {
          font-size: 18px;
        }
      }
    }
  }
}

.light {
  background-color: variables.$color-main;
}

.dark {
  background-color: #88786d;
}
</style>
