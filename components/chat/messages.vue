<template>
  <div class="flex flex-col gap-4 p-4">
    <ChatMessage v-for="message in messages" :key="message.id" :message="message" />
  </div>
</template>

<script lang="ts" setup>
import type { Message } from '@/types/types'

const props = defineProps({
  messages: {
    type: Array as PropType<Message[]>,
    required: true
  }
})
</script>

<style>

</style>