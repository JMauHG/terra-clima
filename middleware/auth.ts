export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data, error } = await useFetch('/api/auth/validate', { credentials: 'include' });

  if (error.value) {
    return navigateTo('/login');
  }
});
