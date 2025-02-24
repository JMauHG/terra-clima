<template>
  <div>
    <AuthLogout />
    <Dashboard />
  </div>
</template>

<script setup lang="ts">
  import AuthLogout from '~/components/AuthLogout.vue';
  import Dashboard from '~/components/Dashboard.vue';
  definePageMeta({
    middleware: 'auth',
  });
</script>