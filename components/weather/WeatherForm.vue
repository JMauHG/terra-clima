<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div>
      <label for="latitude" class="block text-sm font-medium">Latitud</label>
      <input
        v-model="lat"
        type="number"
        id="latitude"
        class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        placeholder="Ej: 20.6596"
        required
      />
    </div>
    <div>
      <label for="longitude" class="block text-sm font-medium">Longitud</label>
      <input
        v-model="lon"
        type="number"
        id="longitude"
        class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        placeholder="Ej: -103.3496"
        required
      />
    </div>
    <div>
      <label for="date" class="block text-sm font-medium">Fecha</label>
      <input
        v-model="date"
        type="date"
        id="date"
        class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        required
      />
    </div>
    <div>
      <label for="provider" class="block text-sm font-medium">Proveedor de Clima</label>
      <select
        v-model="provider"
        id="provider"
        class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        required
      >
        <option value="visualcrossing">Visual Crossing</option>
        <option value="openweathermap">OpenWeatherMap</option>
      </select>
    </div>
    <button
      type="submit"
      class="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded"
    >
      Escanear el Clima
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const lat = ref<number>(20.6596);
const lon = ref<number>(-103.3496);
const zoom = ref<number>(5);
const date = ref<string>("");
const provider = ref<string>("visualcrossing");

const emit = defineEmits(["scan"]);

const submitForm = () => {
  if (lat.value && lon.value && date.value && provider.value) {
    emit("scan", {
      lat: lat.value,
      lon: lon.value,
      date: date.value,
      provider: provider.value,
    });
  }
};
</script>