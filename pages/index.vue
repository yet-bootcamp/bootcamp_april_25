<template>
  <main class="max-w-md flex flex-col mx-auto">
    <header class="flex items-center gap-4 mb-4 justify-between">
      <div class="flex items-center">
        <img src="/assets/img/logo.png" width="59" height="34">
        <h2 class="font-bold text-2xl">Koala</h2>
      </div>
      <div class="flex flex-row gap-5 items-center">
        <div class="flex items-center">
          <img src="/assets/img/fire.gif" width="40" height="40"/>
          <p class="font-semibold">5 дней</p>
        </div>
        <UAvatar src="https://github.com/benjamincanac.png" />
      </div>
    </header>
    <div class="bg-[#2E2E2E80] p-6 rounded-3xl border-1 border-gray">
      <div class="flex flex-row justify-between">
        <h3 class="text-lg font-bold mb-2">Моя коала</h3>
        <UIcon name="material-symbols:info-outline-rounded size-6 text-[#A6A6A6]"></UIcon>
      </div>
      <div class="mb-2">
        <p class="flex justify-between text-green"><span class="font-semibold mb-1">Знания</span> <span>600xp</span></p>
        <UProgress color="success" :max="1000" v-model="valueKnowledge"></UProgress>
      </div>
      <div>
        <p class="flex justify-between text-orange"><span class="font-semibold mb-1">Мотивация</span> <span>900xp</span></p>
        <UProgress color="warning" :max="1000" v-model="valueMotivation"></UProgress>
      </div>
    </div>

    <div class="background-[url(/assets/img/rectangleGreen.png)]">
      <img src="/assets/img/koalaStudent.png" width="91" height="86">
      <p class="text-lg font-bold">Практика</p>
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