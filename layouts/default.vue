<template>
  <div class="min-h-screen">
    <EffectProgressiveBlur direction="top" :blur="20" :layers="7" class="fixed z-10 top-0 left-0 right-0 " :style="{ height: `${headerHeight*1.5}px` }" />
    <header ref="headerRef" class="flex items-center gap-4 w-full p-6 fixed top-0 left-0 z-20">
      <NuxtLink to="/" class="flex items-center">
        <img src="/assets/img/logo.png" width="59" height="34">
        <h2 class="font-bold text-2xl">{{ title }}</h2>
      </NuxtLink>
      <div class="flex items-center ml-auto">
        <img src="/assets/img/fire.gif" width="40" height="40"/>
        <p class="font-semibold">5 дней</p>
      </div>
      <UAvatar src="https://github.com/benjamincanac.png" />
    </header>
    <main class="container mx-auto p-4" :style="{ marginTop: `${headerHeight}px` }">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>

const headerRef= ref<HTMLElement>()

const headerHeight = computed(() => {
  if (!headerRef.value) return 0
  return headerRef.value.offsetHeight
})

const route = useRoute()

const title = computed(() => {
  return route.meta.title || 'Koala'
})
</script>

<style>

</style>