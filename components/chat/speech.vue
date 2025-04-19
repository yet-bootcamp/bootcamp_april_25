<script setup lang="ts">
import { useSpeechRecognition } from '@vueuse/core'
import { shallowRef, watch } from 'vue'

const lang = shallowRef('ru-RU')

function sample<T>(arr: T[], size: number) {
  const shuffled = arr.slice(0)
  let i = arr.length
  let temp: T
  let index: number
  while (i--) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(0, size)
}

const speech = useSpeechRecognition({
  lang,
  continuous: true,
})

function start() {
  speech.result.value = ''
  speech.start()
}

const { isListening, isSupported, stop, result } = speech

const emit = defineEmits(['result'])

watch(result, result => {
  emit('result', result)
})

const selectedLanguage = shallowRef(lang.value)
watch(lang, lang => isListening.value ? null : selectedLanguage.value = lang)
watch(isListening, isListening => isListening ? null : selectedLanguage.value = lang.value)
</script>

<template>
      <button v-if="!isListening" @click="start" class="flex items-center w-10 h-10 justify-center aspect-square bg-gray rounded-full">
          <UIcon name="mdi:microphone-off" class="w-full h-1/3"></UIcon>
        </button>
        <button v-if="isListening" class="flex items-center w-10 h-10 justify-center aspect-square bg-green-darker rounded-full" @click="stop">
          <UIcon name="mdi:microphone-outline" class="w-full h-1/3"></UIcon>
      </button>
        
</template>

<!-- <style scoped>
.tag {
  padding: 0.3rem 0.6rem;
  margin-right: 0.5rem;
  border-radius: 4px;
}
</style> -->

<style scoped lang="postcss">
input {
  --tw-ring-offset-width: 1px !important;
  --tw-ring-color: #8885 !important;
  --tw-ring-offset-color: transparent !important;
}

.radio {
  @apply inline-flex items-center my-auto cursor-pointer select-none;
}

.radio input {
  appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  @apply bg-gray-400/30;
  @apply rounded-full h-4 w-4 select-none relative;
  @apply mr-1;
}

.radio input:checked::after {
  content: '';
  @apply absolute inset-[3px] rounded-full bg-primary;
}

.checkbox span {
  @apply ml-1.5 text-13px opacity-70;
}
</style>