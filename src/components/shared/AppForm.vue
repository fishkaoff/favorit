<template>
  <div class="form">
    <div class="content">
      <h1 class="title"><slot name="title"></slot></h1>
      <p class="remark">
        <slot name="remark"></slot>
      </p>

      <div class="inputs">
        <input type="text" placeholder="Имя" class="input" />
        <input
          type="phone"
          placeholder="Номер телефона"
          class="input"
          v-maska:unmaskedValue.unmasked="'+# (###) ###-##-##'"
          v-model="maskedValue"
        />
      </div>

      <app-button class="btn">Отправить</app-button>
      <p class="privacy">
        Нажимая кнопку "Отправить" вы
        <router-link :to="{ name: 'pd-agreement' }">соглашаетесь</router-link> с условиями обработки
        данных
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vMaska } from 'maska/vue'
import { ref } from 'vue'
import AppButton from './AppButton.vue'

const emit = defineEmits(['submit'])

const name = ref('')

const maskedValue = ref('')
const unmaskedValue = ref('')

defineExpose({ unmaskedValue })

const submit = () => {
  emit('submit', name, unmaskedValue)
}
</script>

<style scoped lang="scss">
.form {
  background-color: variables.$color-accent;
  border-radius: 30px;

  .content {
    padding: 30px;

    .title {
      @include mixins.text-title(40px);
      font-weight: 600;
      color: variables.$color-main;
      text-align: center;
      text-transform: uppercase;
    }

    .remark {
      @include mixins.text-base(25px);
      font-weight: 600;
      color: variables.$color-main;
      text-align: center;
      margin-top: 60px;
    }

    .inputs {
      width: 80%;
      margin: 0 auto;
      display: flex;
      margin-top: 40px;
      justify-content: space-around;

      .input {
        outline: none;
        border: none;
        border-bottom: 1px solid variables.$color-main;
        background-color: transparent;

        @include mixins.text-base(22px);
        color: variables.$color-main;
      }

      .input::placeholder {
        color: variables.$color-accent-dark;
      }

      @media screen and (max-width: 680px) {
        display: block;

        .input {
          width: 100%;

          margin-top: 20px;
        }
      }
    }

    .btn {
      width: 40%;
      margin: 0 auto;
      margin-top: 60px;

      @media screen and (max-width: 400px) {
        width: 100%;
      }
    }

    .privacy {
      @include mixins.text-base(16px);
      color: variables.$color-main;
      text-align: center;
      padding-top: 20px;

      a {
        color: variables.$color-accent-dark;
      }
    }
  }
}
</style>
