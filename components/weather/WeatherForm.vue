<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div>
      <label for="latitude" class="block text-sm font-medium">Latitude</label>
      <input
        v-model="lat"
        type="number"
        id="latitude"
        step="any"
        class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        placeholder="Ej: 20.6596"
        required
      />
    </div>
    <div>
      <label for="longitude" class="block text-sm font-medium">Longitude</label>
      <input
        v-model="lon"
        type="number"
        id="longitude"
        step="any"
        class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        placeholder="Ej: -103.3496"
        required
      />
    </div>
    <div>
      <label for="date" class="block text-sm font-medium">Date</label>
      <input
        v-model="date"
        type="date"
        id="date"
        class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        required
      />
    </div>
    <div>
      <label for="provider" class="block text-sm font-medium">Weather Provider</label>
      <select
        v-model="provider"
        id="provider"
        class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        required
      >
        <option v-for="option in providers" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    <button
      type="submit"
      class="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded"
    >
      Scan the Weather
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const lat = ref<number>(20.6596);
const lon = ref<number>(-103.3496);
const date = ref<string>("");
const provider = ref<string>("visualcrossing");
const providers = ref([
  { value: "visualcrossing", label: "Visual Crossing" },
  { value: "weatherapi", label: "Weather Api" }
]);

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