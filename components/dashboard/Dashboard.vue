<template>
  <div class="p-8 bg-gray-900 text-white min-h-screen">
    <h1 class="text-2xl font-bold mb-8">Panel de Control del Clima</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-gray-800 p-6 rounded-lg">
        <WeatherForm @scan="handleScan" />
      </div>
      <div class="bg-gray-800 p-6 rounded-lg">
        <WeatherResult v-if="humidityData" :data="humidityData" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WeatherForm from '../weather/WeatherForm.vue';
import WeatherResult from '../weather/WeatherResult.vue';

interface HumidityData {
  date: string;
  humidity: string;
  message: string;
}

const humidityData = ref<HumidityData | null>(null);

const handleScan = async (data: { lat: number; lon: number; date: string; provider: string }) => {
  try {
    const response = await fetch(`/api/weather/humidity?lat=${data.lat}&lon=${data.lon}&date=${data.date}&weather_provider=${data.provider}`);
    humidityData.value = await response.json();
  } catch (error) {
    console.error('Error fetching humidity data:', error);
  }
};
</script>