<script setup lang="ts">

import { z } from 'zod';
import { useWebApp, BackButton } from 'vue-tg';
import type { Message } from '@/types/types';
import { da } from '@nuxt/ui/runtime/locale/index.js';
const { initDataUnsafe } = useWebApp();

const messages = ref<Message[]>([])

const { $api } = useNuxtApp()
const id = computed(() => Number.parseInt(useRoute().params.id as string) || 0)

const mockedMessages = [
  [
    { id: 0, text: "Start", aiResponse: false },
    { id: 1, text: "Здравствуйте! Я хотел бы обсудить современные подходы в веб-разработке.", aiResponse: true },
    { id: 2, text: "Конечно! Давайте начнем с основ. Что вы знаете о современных фреймворках?", aiResponse: false },
    { id: 3, text: "Я знаком с React и Vue, но хотел бы лучше понять их различия.", aiResponse: true },
    { id: 4, text: "Отлично! Давайте сравним их. React использует JSX и виртуальный DOM...", aiResponse: false },
    { id: 5, text: "А как насчет производительности этих фреймворков?", aiResponse: true },
    { id: 6, text: "Хороший вопрос! Оба фреймворка достаточно быстрые, но есть нюансы...", aiResponse: false },
    { id: 7, text: "Какой фреймворк вы бы порекомендовали для начинающих?", aiResponse: true },
    { id: 8, text: "Для новичков Vue может быть проще в освоении благодаря своей структуре.", aiResponse: false },
    { id: 9, text: "А что насчет TypeScript? Стоит ли его изучать?", aiResponse: true },
    { id: 10, text: "Однозначно да! TypeScript становится стандартом в индустрии.", aiResponse: false },
    { id: 11, text: "Как лучше всего начать изучение TypeScript?", aiResponse: true },
    { id: 12, text: "Начните с официальной документации и простых проектов...", aiResponse: false },
    { id: 13, text: "Какие есть хорошие ресурсы для обучения?", aiResponse: true },
    { id: 14, text: "Могу порекомендовать несколько отличных онлайн-курсов...", aiResponse: false },
    { id: 15, text: "А как насчет практики? Где искать проекты?", aiResponse: true },
    { id: 16, text: "GitHub отлично подходит для поиска open-source проектов...", aiResponse: false },
    { id: 17, text: "Спасибо! А какие soft skills важны для разработчика?", aiResponse: true },
    { id: 18, text: "Коммуникация и умение работать в команде очень важны...", aiResponse: false },
    { id: 19, text: "Как развивать эти навыки?", aiResponse: true },
    { id: 20, text: "Участвуйте в командных проектах и посещайте митапы...", aiResponse: false }
  ],
  [
  { id: 0, text: "Start", aiResponse: false },

    { id: 1, text: "Здравствуйте! Интересуюсь основами бизнес-планирования.", aiResponse: true },
    { id: 2, text: "Отлично! С чего бы вы хотели начать?", aiResponse: false },
    { id: 3, text: "Как правильно провести анализ рынка?", aiResponse: true },
    { id: 4, text: "Начните с определения целевой аудитории и конкурентов...", aiResponse: false },
    { id: 5, text: "Какие инструменты лучше использовать для анализа?", aiResponse: true },
    { id: 6, text: "SWOT-анализ и Porter's Five Forces очень эффективны...", aiResponse: false },
    { id: 7, text: "Как составить финансовый план?", aiResponse: true },
    { id: 8, text: "Важно учесть все расходы и прогнозировать доходы...", aiResponse: false },
    { id: 9, text: "Какие типичные ошибки допускают начинающие предприниматели?", aiResponse: true },
    { id: 10, text: "Часто недооценивают маркетинг и переоценивают спрос...", aiResponse: false },
    { id: 11, text: "Как избежать этих ошибок?", aiResponse: true },
    { id: 12, text: "Тщательное планирование и консультации с экспертами помогут...", aiResponse: false },
    { id: 13, text: "Что важнее: маркетинг или продукт?", aiResponse: true },
    { id: 14, text: "Оба аспекта критически важны для успеха...", aiResponse: false },
    { id: 15, text: "Как найти первых клиентов?", aiResponse: true },
    { id: 16, text: "Начните с личных контактов и социальных сетей...", aiResponse: false },
    { id: 17, text: "Какие навыки нужны предпринимателю?", aiResponse: true },
    { id: 18, text: "Лидерство, стратегическое мышление и адаптивность...", aiResponse: false },
    { id: 19, text: "Как развивать эти качества?", aiResponse: true },
    { id: 20, text: "Практика, обучение и общение с опытными предпринимателями...", aiResponse: false }
  ],
  [
  { id: 0, text: "Start", aiResponse: false },

    { id: 1, text: "Здравствуйте! Хочу узнать больше о машинном обучении.", aiResponse: true },
    { id: 2, text: "Отлично! Какие области ML вас интересуют?", aiResponse: false },
    { id: 3, text: "Особенно интересует компьютерное зрение.", aiResponse: true },
    { id: 4, text: "Хороший выбор! Начнем с основ нейронных сетей...", aiResponse: false },
    { id: 5, text: "Какие библиотеки лучше использовать?", aiResponse: true },
    { id: 6, text: "TensorFlow и PyTorch самые популярные...", aiResponse: false },
    { id: 7, text: "С какой лучше начать?", aiResponse: true },
    { id: 8, text: "PyTorch часто проще для начинающих...", aiResponse: false },
    { id: 9, text: "Какие датасеты использовать для обучения?", aiResponse: true },
    { id: 10, text: "MNIST и CIFAR-10 отлично подходят для начала...", aiResponse: false },
    { id: 11, text: "Как подготовить данные для обучения?", aiResponse: true },
    { id: 12, text: "Важно правильно нормализовать и аугментировать данные...", aiResponse: false },
    { id: 13, text: "Что такое переобучение?", aiResponse: true },
    { id: 14, text: "Это когда модель слишком хорошо запоминает тренировочные данные...", aiResponse: false },
    { id: 15, text: "Как избежать переобучения?", aiResponse: true },
    { id: 16, text: "Используйте регуляризацию и кросс-валидацию...", aiResponse: false },
    { id: 17, text: "Какие метрики важны для оценки модели?", aiResponse: true },
    { id: 18, text: "Accuracy, precision, recall и F1-score...", aiResponse: false },
    { id: 19, text: "Как улучшить точность модели?", aiResponse: true },
    { id: 20, text: "Попробуйте настроить гиперпараметры и архитектуру сети...", aiResponse: false }
  ]
]
const getMessages = async () => {
  messages.value = mockedMessages[id.value]
  // const [error, data] = await useTryCatch(
  //   $api
  //   .get(`/messages/${id.value}`)
  //   .then((res) => res.body)
  // );
  // if(data) {
  //   console.log(data)
  //   messages.value = JSON.parse(JSON.stringify(data))
  // } else {
  //   console.error(error)
  // }
}

onMounted(() => {
  getMessages()
})

const sendMessage = async (message: string) => {
  const [error, data] = await useTryCatch(
    $api.post(`/message`,({
      id: getUserID(),
      message: [message],
      neuro_id: id.value
    })).then((res) => res.json())
  )
  if(data) {
    console.log(data)
    getMessages()
  } else {
    console.error(error)
  }
}

const schema = z.object({
  message: z.string().min(1),
})

const state = ref({
  message: '',
})
  const router = useRouter()

const handleSpeechResult = (result: string) => {
  state.value.message = result
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <ClientOnly>
      <BackButton @click="router.back()" />
    </ClientOnly>
    <h1 class="text-2xl font-bold text-center">Чат-бот</h1>
    <ChatMessages :messages="messages" class="mb-24" />
    <EffectProgressiveBlur direction="bottom" :blur="10" :layers="10" class="fixed z-10 bottom-0 left-0 right-0 h-32" />
    <UForm :schema="schema" :state="state" class="flex gap-2 flex-col z-20 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-2xl w-full p-4" @submit.prevent="sendMessage(state.message)">
      <div class="flex gap-2">
        <UInput v-model="state.message" placeholder="Сообщение"  size="xl" class="w-full"/>
        <ChatSpeech class="aspect-square size-4 min-h-4 max-h-4 min-w-4 max-w-4" @result="handleSpeechResult" />
      </div>
      <UButton type="submit" size="xl">
        Отправить
      </UButton>
    </UForm>
  </div>
</template>


