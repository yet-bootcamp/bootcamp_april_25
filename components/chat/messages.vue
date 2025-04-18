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

const mockedMessages = ref<Message[]>([
  {
    id: '1',
    text: 'Привет! Как дела?',
    aiResponse: false
  },
  {
    id: '2',
    text: 'Здравствуйте! У меня все хорошо, готов помочь вам. Как я могу быть полезен?',
    aiResponse: true
  },
  {
    id: '3', 
    text: 'Мне нужна помощь с поиском работы',
    aiResponse: false
  },
  {
    id: '4',
    text: 'Конечно! Я помогу вам с поиском работы. Какую должность вы ищете?',
    aiResponse: true
  },
  {
    id: '5',
    text: 'Я ищу позицию frontend-разработчика',
    aiResponse: false
  },
  {
    id: '6',
    text: 'Отлично! Какой у вас опыт работы и какими технологиями вы владеете?',
    aiResponse: true
  },
  {
    id: '7',
    text: 'У меня 2 года опыта работы с React и Vue.js',
    aiResponse: false
  },
  {
    id: '8',
    text: 'Это хороший опыт! Знаете ли вы TypeScript и современные инструменты сборки?',
    aiResponse: true
  },
  {
    id: '9',
    text: 'Да, я использую TypeScript и Vite в своих проектах',
    aiResponse: false
  },
  {
    id: '10',
    text: 'Прекрасно! Я могу порекомендовать несколько компаний, которые ищут таких специалистов',
    aiResponse: true
  },
  {
    id: '11',
    text: 'Это было бы очень полезно!',
    aiResponse: false
  },
  {
    id: '12',
    text: 'Вот список компаний с открытыми позициями: TechCorp, WebSolutions, DevPro. Хотите узнать подробнее о какой-то из них?',
    aiResponse: true
  },
  {
    id: '13',
    text: 'Да, расскажите про TechCorp пожалуйста',
    aiResponse: false
  },
  {
    id: '14',
    text: 'TechCorp - международная компания, разрабатывающая веб-приложения. Они предлагают удаленную работу, конкурентную зарплату и гибкий график',
    aiResponse: true
  },
  {
    id: '15',
    text: 'Звучит интересно! Как я могу подать заявку?',
    aiResponse: false
  },
  {
    id: '16',
    text: 'Я могу отправить вам ссылку на их страницу с вакансиями. Также порекомендую подготовить портфолио проектов',
    aiResponse: true
  },
  {
    id: '17',
    text: 'У меня есть портфолио на GitHub. Буду благодарен за ссылку!',
    aiResponse: false
  },
  {
    id: '18',
    text: 'Отлично! Вот ссылка: [website]. Желаю удачи с подачей заявки! Нужна ли еще какая-то помощь?',
    aiResponse: true
  },
  {
    id: '19',
    text: 'Нет, спасибо! Вы очень помогли',
    aiResponse: false
  },
  {
    id: '20',
    text: 'Рад был помочь! Если появятся еще вопросы, обращайтесь',
    aiResponse: true
  }
])
</script>

<style>

</style>