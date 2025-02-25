<template>
  <button
    @click="logout"
    class="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
  >
    Logout
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = async () => {
  // Logout request
  await useFetch('/api/auth/logout', { method: 'GET', credentials: 'include' });
  
  // Redirect to login page
  router.push('/login');
};
</script>
