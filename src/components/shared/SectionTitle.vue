<template>
  <div class="section-title">
    <h2 class="sub-title">
      <slot name="sub-title"></slot>
    </h2>
    <h1 class="title">
      <slot name="dark-text"></slot>

      <span>
        <slot name="light-text"></slot>
      </span>
    </h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.section-title {
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

    @media screen and (max-width: 400px) {
      font-size: 40px;
    }
  }
}
</style>
