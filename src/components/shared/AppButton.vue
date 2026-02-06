<template>
    <button class="app-button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.app-button {
    display: block;
    width: 100%;
    border: none;
    outline: none;

    @include mixins.text-base(18px);
    color: variables.$color-secondary;
    background-color: variables.$color-main;

    padding: 20px;
    border-radius: 30px;


    cursor: pointer;
    transition: all .7s;
}

.app-button:hover {
    background-color: variables.$color-accent;
}
</style>