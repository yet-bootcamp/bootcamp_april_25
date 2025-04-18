<template>
  <UForm :schema="schema" :state="state" class="flex flex-col gap-4 p-4" @submit.prevent="register">
    <UFormField label="Имя" name="name" class="w-full">
      <UInput id="name" class="w-full" v-model="state.name" name="name" placeholder="Укажите ваше имя" />
    </UFormField>
    <UFormField  label="Опыт" name="experience" class="w-full">
      <UInput id="experience" class="w-full" v-model="state.experience" name="experience" type="number" placeholder="Укажите количество лет" />
    </UFormField>
    <UFormField label="Место работы" name="workplace" class="w-full">
      <UInput id="workplace" class="w-full" v-model="state.workplace" name="workplace" placeholder="Укажите ваше место работы" />
    </UFormField>
    <UButton type="submit">Продолжить</UButton>
  </UForm>
</template>

<script lang="ts" setup>

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, "Имя должно быть указано"),
  experience: z.number().min(1, "Опыт должен быть больше одного года"),
  workplace: z.string().min(1, "Место работы должно быть указано"),
});

const state = ref({
  name: '',
  experience: 0,
  workplace: '',
}); 

const register = () => {
  console.log(state.value);
}

</script>

<style>

</style>