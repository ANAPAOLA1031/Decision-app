<template>
  <div v-if="istMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img
        v-if="image"
        :src="image"
        alt="Respuesta a la pregunta"
        class="w-52 h-52 object-cover rounded-md"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  istMine: boolean;
  image?: string;
}

defineProps<Props>();
</script>

<style scoped></style>
