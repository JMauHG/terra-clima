<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = async () => {
  await useFetch('/api/auth/logout', { method: 'GET', credentials: 'include' });
  router.push('/login'); // Redirige al login después del logout
};
</script>

<template>
  <button @click="logout">Logout</button>
</template>