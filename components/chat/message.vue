<template>
  <div class="flex gap-2" :class="{'flex-row-reverse': !message.aiResponse}">
    <UAvatar v-if="message.aiResponse" class="mt-auto" src="favicon.ico"></UAvatar>
    <div class="flex flex-col gap-2" >
      <h1 class="text-sm font-bold" :class="{'text-right': !message.aiResponse}">{{ message.aiResponse ? 'Искусственный интеллект' : 'Вы' }}</h1>
      <UCard >
        <div class="text-sm">{{ message.text }}</div>
      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Message } from '@/types/types'

const props = defineProps<{
  message: Message
}>()
</script>

<style>

</style>