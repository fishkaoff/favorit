<template>
    <button class="bordered-button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.bordered-button {
    display: block;
    width: 100%;
    border: 1px solid variables.$color-main;
    outline: none;

    @include mixins.text-base(18px);
    color: variables.$color-main;
    background-color: transparent;

    padding: 20px;
    border-radius: 30px;


    cursor: pointer;
    transition: all .7s;
}

.bordered-button:hover {
    background-color: variables.$color-main;
    color: variables.$color-secondary;
}
</style>