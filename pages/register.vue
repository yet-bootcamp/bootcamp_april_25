<template>
  <div>
    <welcome />
    <form class="form-container" @submit.prevent="register">
      <div class="form-group">
        <label for="name">Имя</label>
        <input 
          id="name"
          v-model="state.name"
          type="text"
          placeholder="Укажите ваше имя"
          :class="{ 'error': errors.name }"
        />
        <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="experience">Опыт</label>
        <input
          id="experience"
          v-model="state.experience"
          type="number"
          placeholder="Укажите количество лет"
          :class="{ 'error': errors.experience }"
        />
        <span v-if="errors.experience" class="error-text">{{ errors.experience }}</span>
      </div>

      <div class="form-group">
        <label for="workplace">Место работы</label>
        <input
          id="workplace"
          v-model="state.workplace"
          type="text"
          placeholder="Укажите ваше место работы"
          :class="{ 'error': errors.workplace }"
        />
        <span v-if="errors.workplace" class="error-text">{{ errors.workplace }}</span>
      </div>

      <button type="submit">Продолжить</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { z } from 'zod';
import welcome from '~/components/welcome.vue';

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

const errors = ref({
  name: '',
  experience: '',
  workplace: ''
});

const register = () => {
  // Сброс ошибок
  errors.value = {
    name: '',
    experience: '',
    workplace: ''
  };

  try {
    schema.parse(state.value);
    console.log(state.value);
  } catch (err) {
    if (err instanceof z.ZodError) {
      err.errors.forEach((error) => {
        if (error.path[0]) {
          errors.value[error.path[0] as keyof typeof errors.value] = error.message;
        }
      });
    }
  }
}
</script>

<style scoped>
.error {
  border-color: #ef4444 !important;
}

.error-text {
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
}
</style>