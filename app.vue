<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">

const {$api} = useNuxtApp()

await $api.get('/ping').then((res) => {
  console.log(res)
})

const { data } = await $api.post('/auth', {
  body: getUserID()
}).then((res) => res)
console.log(data)
</script>
