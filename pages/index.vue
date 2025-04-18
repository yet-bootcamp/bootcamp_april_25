<script setup lang="ts">

import { useWebApp } from 'vue-tg';

const { initDataUnsafe } = useWebApp();

</script>

<template>
  <div>
    <UButton>Click me</UButton>
    <h1 class="text-3xl">Hello World</h1>
    <ClientOnly>
      {{ initDataUnsafe }}
    </ClientOnly>
    <NuxtLink to="/register">Register</NuxtLink>
  </div>
</template>


