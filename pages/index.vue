<template>
  <main class="max-w-md flex flex-col">
    
    <div class="bg-[#2E2E2E80] p-4 rounded-md">
      <h3>Ваша коала</h3>
      <p class="flex justify-between color-ui-success"><span>Знания</span> <span>600xp</span></p>
      <UProgress color="success" :max="1000" v-model="valueKnowledge"></UProgress>
      <p>Мотивация</p>
      <UProgress color="warning" :max="1000" v-model="valueMotivation"></UProgress>
      <iframe src="https://d51c-5-104-75-74.ngrok-free.app" frameborder="0"></iframe>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp()
const valueKnowledge = ref(0)
const valueMotivation = ref(0)
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