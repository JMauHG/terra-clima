<template>
    <div
      :class="{
        'bg-green-900': isSuitable,
        'bg-red-900': !isSuitable,
      }"
      class="p-4 rounded-lg mt-8"
    >
      <p class="text-lg">Fecha: {{ data.date }}</p>
      <p class="text-lg">Humedad: {{ data.humidity }}</p>
      <p class="text-lg">{{ data.message }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  interface HumidityData {
    date: string;
    humidity: string;
    message: string;
  }
  
  const props = defineProps<{
    data: HumidityData;
  }>();
  
  const isSuitable = computed(() => {
    const humidityValue = parseFloat(props.data.humidity);
    return humidityValue >= 40; // Ajusta el valor según lo que consideres "suficiente"
  });
  </script>