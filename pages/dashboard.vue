<template>
  <div class="p-8 bg-gray-900 text-white min-h-screen">
    <div class="flex justify-between items-center mb-8">
      <AuthLogout />
    </div>
    <Dashboard />
  </div>
</template>

<script setup lang="ts">
  import AuthLogout from '~/components/AuthLogout.vue';
  import Dashboard from '~/components/dashboard/Dashboard.vue';
  definePageMeta({
    middleware: 'auth',
  });
</script>