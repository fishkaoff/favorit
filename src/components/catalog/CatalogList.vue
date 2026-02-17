<template>
  <div class="catalog">
    <section-title>
      <template #sub-title>Каталог</template>
      <template #dark-text>Подберем или разработаем <br /></template>
      <template #light-text> Проект под вас</template>
    </section-title>

    <div class="projects">
      <project-card
        v-for="project in projects"
        :image="project.image"
        :title="project.title"
        :size="project.size"
        :key="project.title"
        class="card"
      />
    </div>

    <app-form class="form" id="catalog-form"
      ><template #title>Нужен каталог?</template>
      <template #remark>Оставьте заявку и мы отправим вам наши проекты</template></app-form
    >
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../shared/SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'
import Mini from '@/assets/images/mini.jpg'
import Middle from '@/assets/images/middle.png'
import maxiB1 from '@/assets/images/maxi-b1.jpg'
import maxiB2 from '@/assets/images/maxi-b2.png'
import AppForm from '../shared/AppForm.vue'

const projects = [
  {
    image: Mini,
    title: 'Мини Баня',
    size: '6x4',
  },
  {
    image: Middle,
    title: 'Мидл Баня',
    size: '7x6',
  },
  {
    image: maxiB1,
    title: 'Макси B1',
    size: '9x6',
  },
  {
    image: maxiB2,
    title: 'Макси B2',
    size: '9x6',
  },
]
</script>

<style scoped lang="scss">
.catalog {
  @include mixins.container;

  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 30px;

    .card {
      flex: 1;
      min-width: 48%;
    }
  }

  .form {
    margin-top: 50px;
  }
}
</style>
