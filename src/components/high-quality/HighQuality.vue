<template>
  <div class="quality">
    <div class="content">
      <h2 class="sub-title">Преимущества</h2>
      <h1 class="title">Мы гарантируем качество <span>уже 10 лет</span></h1>

      <div class="cards">
        <left-card
          :position="1"
          class="card"
          title="Опытная команда"
          text="Наша команда состоит из специалистов с практическим опытом в строительстве каркасных домов и бань. Мы знаем все нюансы технологии и контролируем каждый этап работ. Это гарантирует надёжность, точность и аккуратный результат."
        />
        <right-card
          :position="2"
          class="card right"
          title="Партнерские отношения с производителями"
          text="Мы напрямую сотрудничаем с проверенными производителями материалов и модульных конструкций. Это позволяет нам обеспечивать стабильное качество и надёжность поставок. А ещё — предлагать клиентам лучшие решения без посредников."
        />
        <left-card
          :position="3"
          class="card"
          title="Большой выбор"
          text="В нашем каталоге — широкий выбор проектов каркасных домов, бань и модульных решений на любой вкус и бюджет. Мы поможем подобрать вариант под ваши задачи или адаптируем проект под ваши пожелания. Вы получаете именно тот формат, который нужен вам."
        />
        <right-card
          :position="4"
          class="card right"
          title="Доступная стоимость"
          text="Мы оптимизировали процессы и работаем напрямую с поставщиками, чтобы удерживать честные и доступные цены. Вы не переплачиваете за посредников и скрытые расходы. При этом качество строительства остаётся на высоком уровне."
        />
        <left-card
          :position="5"
          class="card"
          title="Гарантия до 5 лет"
          text="Мы уверены в качестве наших домов и бань, поэтому предоставляем гарантию до 5 лет. В течение гарантийного срока вы можете быть спокойны за надёжность конструкции. Мы всегда остаёмся на связи и отвечаем за результат нашей работы."
        />
      </div>
    </div>
  </div>
</template>
J

<script setup lang="ts">
import LeftCard from './LeftCard.vue'
import RightCard from './RightCard.vue'
</script>

<style scoped lang="scss">
.quality {
  border-radius: 60px;
  background-color: variables.$color-accent-dark;

  .content {
    padding: 30px;
    @include mixins.container;

    .sub-title {
      @include mixins.text-title(22px);
      font-weight: 500;
      color: variables.$color-accent-light;
      text-transform: uppercase;
      padding-top: 20px;
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

      @media screen and (max-width: 360px) {
        font-size: 36px;
      }
    }

    .cards {
      display: flex;
      flex-direction: column;
      .card {
        width: 80%;
        margin-top: 30px;

        @media screen and (max-width: 500px) {
          width: 100%;
        }
      }

      .right {
        align-self: flex-end;
      }
    }
  }
}
</style>
