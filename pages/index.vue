<template>
  <main class="max-w-md flex flex-col mx-auto">
    <div class="bg-[#2E2E2E80] p-6 rounded-3xl border-1 border-gray mb-8">
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

    
    <div class="flex gap-8 justify-between">
      <NuxtLink to="/practice" class="flex flex-col justify-center items-center aspect-square w-full max-w-[48%] overflow-hidden  rounded-3xl bg-cover bg-[url(~/assets/img/rectangleGreen.png)] bg-no-repeat">
        <img src="/assets/img/koalaStudent.png" class="h-auto w-2/4">
        <p class="text-lg font-bold">Практика</p>
      </NuxtLink>
      <NuxtLink to="/theory" class="flex flex-col justify-center items-center aspect-square w-full max-w-[48%] overflow-hidden  rounded-3xl bg-cover bg-[url(~/assets/img/rectangleBlue.png)] bg-no-repeat">
        <img src="/assets/img/koalaRead.png" class="h-auto w-2/4">
        <p class="text-lg font-bold">Теория</p>
      </NuxtLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp()
const valueKnowledge = ref(600)
const valueMotivation = ref(900)
onMounted(async () => { 
  const [error, data] = await useTryCatch($api.get('/sections').then((res) => res.text()))
  if(data) {
    console.log(data)
  }else{
    console.error(error)
  }
})
</script>

<style>

</style>