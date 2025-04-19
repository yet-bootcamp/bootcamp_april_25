<template>
  <div class="register-container">
    <welcome />
    <UForm :state="state" :schema="currentSchema" @submit="handleSubmit" class="form-wrapper">
      <div class="flex flex-col gap-4">
        <h2 class="step-title">Шаг {{ currentStep }}: Личные данные</h2>

        <!-- Шаг 1: Имя -->
        <Transition name="fade">
          <UFormGroup v-if="currentStep >= 1" label="Имя">
            <UInput
            class="w-full"
            size="xl"
              v-model="state.name"
              placeholder="Укажите ваше имя"
              :disabled="currentStep !== 1"
            />
          </UFormGroup>
        </Transition>

        <Transition name="fade">
          <UFormGroup v-if="currentStep >= 2" label="Опыт">
            <UInput
              class="w-full"
              size="xl"
              v-model="state.experience"
              type="number"
              placeholder="Укажите количество лет"
              :disabled="currentStep !== 2"
            />
          </UFormGroup>
        </Transition>

        <!-- Шаг 3: Место работы -->
        <Transition name="fade">
          <UFormGroup v-if="currentStep >= 3" label="Место работы">
            <UInput
              class="w-full"
              size="xl"
              v-model="state.workplace"
              placeholder="Укажите ваше место работы"
              :disabled="currentStep !== 3"
            />
          </UFormGroup>
        </Transition>

        <!-- Прогресс и кнопка -->
        <div class="progress-container flex flex-col justify-center items-center">
          <UButton type="submit" :disabled="isLoading" class="submit-button flex justify-center w-[80%] mb-4 ">
            {{ currentStep === 3 ? 'Завершить' : 'Далее' }}
          </UButton>
          <UProgress
            size="lg"
            v-model="value"
            color="primary"
            :max="3"
          />
        </div>
      </div>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { z } from 'zod';
import welcome from '~/components/welcome.vue';

const value = ref(1)
const currentStep = ref(1);
const isLoading = ref(false);

const state = ref({
  name: '',
  experience: '',
  workplace: '',
});

// Схемы валидации для каждого шага
const schemas = {
  1: z.object({
    name: z.string().min(1, "Имя должно быть указано"),
  }),
  2: z.object({
    experience: z.string().min(1, "Опыт должен быть указан"),
  }),
  3: z.object({
    workplace: z.string().min(1, "Место работы должно быть указано"),
  }),
};

const currentSchema = computed(() => schemas[currentStep.value as keyof typeof schemas]);

const handleSubmit = async () => {
  try {
    isLoading.value = true;
    
    currentSchema.value.parse({
      name: state.value.name,
      experience: state.value.experience,
      workplace: state.value.workplace,
    });

    if (currentStep.value < 3) {
      currentStep.value++;
      value.value++;
    } else {
      console.log('Отправка данных:', state.value);
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error(err.errors);
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--ui-bg);
}

.form-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
}

.step-title {
  color: var(--ui-text);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  text-align: center;
}

.progress-container {
  margin-top: auto;
  padding-top: 24px;
}

.submit-button {
  width: 80%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>