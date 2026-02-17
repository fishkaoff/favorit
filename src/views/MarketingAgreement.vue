<template>
  <section class="doc">
    <div class="doc__container">
      <h1>Согласие на получение рекламной информации</h1>

      <p>
        Я даю согласие <strong>{{ company }}</strong>
        на получение информационных и рекламных сообщений о товарах и услугах.
      </p>

      <h2>Способы связи</h2>
      <ul>
        <li>Телефонные звонки</li>
        <li>SMS</li>
        <li>Мессенджеры</li>
      </ul>

      <h2>Цель рассылки</h2>
      <p>Информирование о новых предложениях, акциях и услугах компании.</p>

      <h2>Отказ от рассылки</h2>
      <p>
        Я могу отказаться от получения рекламных сообщений в любой момент, направив уведомление на
        {{ email }}.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const company = 'ООО ТПП "АЛЬЯНС-ГРУПП"'
const email = 'alyans219@mail.ru'
</script>

<style lang="scss" scoped>
.doc {
  margin-top: 150px;
  padding: 60px 20px;

  &__container {
    max-width: 900px;
    margin: 0 auto;
    line-height: 1.6;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 24px;
  }

  h2 {
    margin-top: 28px;
    font-size: 20px;
  }

  p,
  li {
    font-size: 16px;
    color: #333;
  }

  ul {
    padding-left: 20px;
  }
}
</style>
