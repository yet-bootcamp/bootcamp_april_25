<template>
  <UCard>
    <div class="flex items-center gap-2">
      <NuxtIcon name="heroicons:book-open-solid" class="aspect-square size-8 min-w-8 max-w-8" />
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-bold">{{ data.title }}</h3>
        <p class="text-sm text-gray-500">{{ data.description }}</p>
      </div>
    </div>
  </UCard>
</template>

<script lang="ts" setup>

const props = defineProps<{
  data: {title: string
  description: string}
}>()

</script>

<style>

</style>