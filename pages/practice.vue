<script lang="ts" setup>
definePageMeta({
    title: 'Практика'
})

const mockedPractise = [
    {
        id: 0,
        title: 'Dev-Практика',
        description: 'Практика для тьюторов в сфере разработки',
        link: '/chat/1'
    },
    {
        id: 1,
        title: 'Бизнес-Практика',
        description: 'Практика для тьюторов в сфере бизнеса',
        link: '/chat/2'
    },
    {
        id: 2,
        title: 'ML-Практика',
        description: 'Практика для тьюторов в сфере машинного обучения',
        link: '/chat/3'
    },
]
</script>

<template>
    <div class="flex flex-col gap-4">
        <UButton v-for="practise in mockedPractise" :key="practise.id" :to="practise.link" variant="outline" size="xl" class="font-bold px-6 py-3">
            {{ practise.title }}
        </UButton>
    </div>
</template>