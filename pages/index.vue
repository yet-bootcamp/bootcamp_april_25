<script setup lang="ts">

import { useWebApp } from 'vue-tg';

const { initDataUnsafe } = useWebApp();
const store = useMyAuthStore();
const {token} = storeToRefs(store)

</script>

<template>
  <div>
    <UButton>Click me</UButton>
    <h1>{{ token || "No Token"}}</h1>
    <h1 class="text-3xl">Hello World</h1>
    <ClientOnly>
      {{ initDataUnsafe }}
    </ClientOnly>
    <NuxtLink to="/register">Register</NuxtLink>
  </div>
</template>


