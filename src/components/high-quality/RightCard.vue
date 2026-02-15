<template>
  <div class="card dark">
    <div class="content">
      <div class="wrapper">
        <h2 class="title">{{ title }}</h2>
        <p class="text">
          {{ text }}
        </p>
      </div>
      <h1 class="position">{{ position }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
  position: number
}>()
</script>

<style scoped lang="scss">
.card {
  width: 80%;
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
      }

      .text {
        @include mixins.text-base(22px);
        color: variables.$color-accent-dark;
        padding-top: 20px;
      }
    }

    @media screen and (max-width: 400px) {
      display: block;
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
