<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">

const { login, token } = useMyAuthStore();

if (!token.value) {
  login();
}

</script>