<template>
  <div class="accordeon">
    <div v-for="(item, index) in items" :key="index" class="accordeon__item">
      <button class="accordeon__question" type="button" @click="toggle(index)">
        {{ item.question }}
        <span :class="{ active: opened.includes(index) }">+</span>
      </button>

      <div class="accordeon__answer" :class="{ open: opened.includes(index) }">
        <div class="accordeon__answer-inner">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FaqItem {
  question: string
  answer: string
}

const items = ref<FaqItem[]>([
  {
    question: 'Сколько стоит дом?',
    answer: 'Цена зависит от проекта, площади и комплектации.',
  },
  {
    question: 'Какие сроки строительства?',
    answer: 'В среднем строительство занимает от 2 до 4 месяцев.',
  },
  {
    question: 'Работаете ли вы под ключ?',
    answer: 'Да, выполняем полный цикл работ под ключ.',
  },
])

const opened = ref<number[]>([])

const toggle = (index: number): void => {
  if (opened.value.includes(index)) {
    opened.value = opened.value.filter((i: number) => i !== index)
  } else {
    opened.value.push(index)
  }
}
</script>

<style setup lang="scss">
.accordeon {
  &__item {
    border-bottom: 1px solid #e0e0e0;
    margin-top: 20px;
  }

  &__question {
    width: 100%;
    padding: 16px;

    background: none;
    border: none;

    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    @include mixins.text-title(22px);
    color: black;
  }

  &__answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;

    &.open {
      max-height: 300px;
    }
  }

  &__answer-inner {
    padding: 0 16px 16px;
    @include mixins.text-base(20px);
    color: variables.$color-accent;
  }

  span {
    font-size: 40px;
    transition: transform 0.3s ease;

    &.active {
      transform: rotate(45deg);
    }
  }
}
</style>
