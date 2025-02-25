export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('aa')
  const { data, error } = await useFetch('/api/auth/validate', { credentials: 'include' });

  if (error.value) {
    return navigateTo('/login');
  }
});
