<template>
  <div class="stages">
    <div class="content">
      <h2 class="sub-title">Этапы работ</h2>
      <h1 class="title">Основные стадии <span>при строительстве</span></h1>

      <div class="cards">
        <card
          :style="'dark'"
          :position="1"
          class="card"
          title="Консультация"
          text="Подробно обсудим ваши пожелания: планировку, размеры, тип бани, материалы каркаса, варианты внешней и внутренней отделки. Подберём оптимальные решения под ваш бюджет и задачи, чтобы баня полностью соответствовала вашим ожиданиям."
        />
        <card
          :style="'light'"
          :position="2"
          class="card"
          title="Расчет стоимости"
          text="Подготовим детальный и прозрачный расчёт стоимости. При необходимости поможем оформить кредит или предложим удобную рассрочку до завершения строительства."
        />
        <card
          :style="'dark'"
          :position="3"
          class="card"
          title="Заключение договора"
          text="Оформим договор подряда с учётом всех согласованных условий: комплектации, сроков, стоимости и этапов работ. Зафиксируем удобный график поэтапной оплаты."
        />
        <card
          :style="'light'"
          :position="4"
          class="card"
          title="Изготовление бани"
          text="Изготовим баню на собственном производстве: соберём каркас, выполним внешнюю и внутреннюю отделку, смонтируем все необходимые инженерные коммуникации. При необходимости изготовим и установим фундамент под баню."
        />
        <card
          :style="'dark'"
          :position="5"
          class="card"
          title="Доставка и установка"
          text="Доставим готовую баню на ваш участок, аккуратно установим и подключим к электросетям и другим коммуникациям. Проведём инструктаж по эксплуатации, чтобы вы сразу могли наслаждаться отдыхом."
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from './Card.vue'
</script>

<style scoped lang="scss">
.stages {
  border-radius: 60px;
  background-color: variables.$color-accent-dark;

  .content {
    @include mixins.container;
    padding-bottom: 50px;

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

      @media screen and (max-width: 600px) {
        font-size: 40px;
        line-height: 1.5em;
      }
    }

    .cards {
      margin-top: 60px;

      .card:not(:first-of-type) {
        margin-top: 40px;
      }
    }
  }
}
</style>
