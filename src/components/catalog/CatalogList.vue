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
import testImage from '@/assets/images/case-01.png'
import AppForm from '../shared/AppForm.vue'

const projects = [
  {
    image: testImage,
    title: 'Талви',
    size: '4x3',
  },
  {
    image: testImage,
    title: 'Талви1',
    size: '4x3',
  },
  {
    image: testImage,
    title: 'Талви2',
    size: '4x3',
  },
  {
    image: testImage,
    title: 'Талви3',
    size: '4x3',
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
