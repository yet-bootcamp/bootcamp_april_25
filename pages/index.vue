<template>
  <main class="max-w-md flex flex-col">
    <header class="flex items-center gap-4">
      <div class="flex items-center">
        <img src="/assets/img/logo.png" width="59" height="34">
        <h2 class="font-bold text-2xl">Koala</h2>
      </div>
      <div class="flex items-center">
        <img src="/assets/img/fire.gif" width="40" height="40"/>
        <p class="font-semibold">5 дней</p>
      </div>
      <UAvatar src="https://github.com/benjamincanac.png" />
    </header>
    <div class="bg-[#2E2E2E80] p-4 rounded-md">
      <h3>Ваша коала</h3>
      <p class="flex justify-between color-ui-success"><span>Знания</span> <span>600xp</span></p>
      <UProgress color="success" :max="1000" v-model="valueKnowledge"></UProgress>
      <p>Мотивация</p>
      <UProgress color="warning" :max="1000" v-model="valueMotivation"></UProgress>
    </div>
  </main>
</template>

<script lang="ts" setup>
let valueKnowledge = ref(600)
let valueMotivation = ref(900)
// const { $api } = useNuxtApp()

// const { data } = await $api.get('/sections').then((res) => res)
// console.log(data)
</script>

<style>

</style>