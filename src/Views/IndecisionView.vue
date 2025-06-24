<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Chat</span>
    </div>

    <ChatMessages :messages="messages" />
    <MessagesBox @send-message="onMessage" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/Components/Chats/ChatMessages.vue';
import MessagesBox from '@/Components/Chats/MessagesBox.vue';

import { useChat } from '@/Composables/useChat.ts';
const { messages, onMessage } = useChat();
</script>

<style scoped></style>
