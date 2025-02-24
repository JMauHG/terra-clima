<script setup lang="ts">

const router = useRouter();

onMounted(() => {
  console.log('The component has been mounted');
});

const logout = async () => {
  await useFetch('/api/auth/logout', { method: 'GET', credentials: 'include' });
  router.push('/login');
};
</script>

<template>
  <button @click="logout">Logout</button>
</template>