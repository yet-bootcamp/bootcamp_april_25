<template>
  <div class="flex flex-col gap-4">
    <TheoryCard v-for="item in mockedData" :key="item.title" :data="item" />    
  </div>
</template>

<script lang="ts" setup>

const mockedData = [
  {
    title: "Основы веб-разработки",
    description: "Изучите фундаментальные концепции HTML, CSS и JavaScript"
  },
  {
    title: "Работа с Git",
    description: "Освойте систему контроля версий Git и GitHub"
  },
  {
    title: "React для начинающих", 
    description: "Погрузитесь в основы React и создание компонентов"
  },
  {
    title: "TypeScript в современной разработке",
    description: "Изучите типизацию и преимущества TypeScript"
  },
  {
    title: "Оптимизация производительности",
    description: "Узнайте как улучшить производительность веб-приложений"
  },
]

</script>

<style>

</style>