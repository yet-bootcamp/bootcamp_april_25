<script setup lang="ts">

import { z } from 'zod';
import { useWebApp, BackButton } from 'vue-tg';
import type { Message } from '@/types/types';
const { initDataUnsafe } = useWebApp();

const messages = ref<Message[]>([])

const { $api } = useNuxtApp()
const id = computed(() => Number.parseInt(useRoute().params.id as string) || 0)

const getMessages = async () => {
  const data = await $api
    .get(`/messages/${id.value}`)
    .then((res) => res);
  console.log(JSON.parse(JSON.stringify(data)))
  messages.value = JSON.parse(JSON.stringify(data))
}

onMounted(() => {
  getMessages()
})

const sendMessage = async (message: string) => {
  await $api.post(`/message`,({
    id: getUserID(),
    message: [message],
    neuro_id: id.value
  })).then((res) => res.json())
  getMessages()
}

const schema = z.object({
  message: z.string().min(1),
})

const state = ref({
  message: '',
})
const router = useRouter()
</script>

<template>
  <div class="flex flex-col gap-4">
    <ClientOnly>
      <BackButton @click="router.back()" />
    </ClientOnly>
    <h1 class="text-2xl font-bold text-center">Чат-бот</h1>
    <ChatMessages :messages="messages" class="mb-24" />
    <EffectProgressiveBlur direction="bottom" :blur="10" :layers="10" class="fixed z-10 bottom-0 left-0 right-0 h-32" />
    <UForm :schema="schema" :state="state" class="flex gap-2 flex-col z-20 fixed bottom-0 left-0 right-0 p-4" @submit.prevent="sendMessage(state.message)">
      <UInput v-model="state.message" placeholder="Сообщение" />
      <UButton type="submit">
        Отправить
      </UButton>
    </UForm>
  </div>
</template>


