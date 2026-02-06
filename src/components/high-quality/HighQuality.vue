<template>
    <div class="quality">
        <div class="content">
            <h2 class="sub-title">Преимущества</h2>
            <h1 class="title">Мы гарантируем качество <span>уже 10 лет</span></h1>

            <div class="cards">
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.quality {
    border-radius: 60px;
    background-color: variables.$color-accent-dark;

    .content {
        @include mixins.container;

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
        }

        .cards {
        }
    }
}
</style>