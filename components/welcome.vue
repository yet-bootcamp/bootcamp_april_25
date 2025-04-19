<template>
  <Transition
    enter-active-class="transition-all duration-700 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-500 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div class="fixed inset-0 flex items-center justify-center bg-[#141414] bg-opacity-90 z-50" v-if="show">
      <div class="text-center">
        <img src="~/assets/img/koala.png" alt="Коала" 
             class="mx-auto w-[250px] mb-4 transition-all duration-1000 delay-300 ease-out opacity-0 translate-y-4 animate-[fade-in_1s_ease-out_300ms_forwards]">
        <h1 class="text-white text-[32px] font-semibold mb-2 transition-all duration-700 delay-500 ease-out opacity-0 translate-y-2 animate-[fade-in_700ms_ease-out_500ms_forwards]">
          Привет!
        </h1>
        <p class="text-white text-xl font-medium mb-6 transition-all duration-700 delay-700 ease-out opacity-0 translate-y-2 animate-[fade-in_700ms_ease-out_700ms_forwards]">
          Рада тебя видеть :)
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const show = ref(true)

onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 3000)
})
</script>

<style>
@keyframes fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 