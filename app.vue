<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">

const {$api} = useNuxtApp()

const [errorPing, dataPing] = await useTryCatch($api.get('/ping').then((res) => res))
if(dataPing) {
  console.log(dataPing)
}else{
  console.error(errorPing)
}

const [error, data] = await useTryCatch($api.post('/auth', {
  body: getUserID()
}).then((res) => res))
if(data) {
  console.log(data)
}else{
  console.error(error)
}
</script>
