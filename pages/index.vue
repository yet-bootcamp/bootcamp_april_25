<template>
  <div>
    <h1 class="text-2xl font-bold text-center">Главная страница</h1>
    <div class="grid grid-cols-2 gap-4 p-4">
      <UButton icon="heroicons:cpu-chip" size="xl" to="/chat/1">
        Направление ML
      </UButton>
      <UButton icon="heroicons:code-bracket" size="xl" to="/chat/2">
        Направление Dev
      </UButton>
      <UButton icon="heroicons:pencil-square" size="xl" to="/chat/3">
        Направление Design
      </UButton>
      <UButton icon="heroicons:briefcase" size="xl" to="/chat/4">
        Направление Бизнес
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp()

const { data } = await $api.get('/sections').then((res) => res)
console.log(data)
</script>

<style>

</style>