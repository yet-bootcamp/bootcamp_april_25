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
  console.log(`ping ${JSON.stringify(res)}`)
})
</script>
