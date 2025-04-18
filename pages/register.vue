<template>
  <UForm :schema="schema" :state="state" class="flex flex-col gap-4" @submit.prevent="register">
    
    <UInput v-model="state.name" name="name" title="Name" />
    <UButton type="submit">Register</UButton>
  </UForm>
</template>

<script lang="ts" setup>

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  experience: z.number().min(1),
  workplace: z.string().min(1),

});

const state = ref({
}); 

const register = () => {
  console.log(state.value);
}

</script>

<style>

</style>