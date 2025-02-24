<template>
    <div class="dashboard-container">
      <h1 class="text-2xl font-bold mb-8">Panel de Control del Clima</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="weather-form-container">
          <WeatherForm @scan="handleScan" />
        </div>
        <div class="weather-result-container">
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
  
  <style scoped>
  .dashboard-container {
    padding: 2rem;
    background-color: #1a1a1a;
    color: #ffffff;
    min-height: 100vh;
  }
  
  .weather-form-container {
    background-color: #2d2d2d;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
  
  .weather-result-container {
    background-color: #2d2d2d;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
  </style>