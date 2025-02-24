<script setup lang="ts">

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();

const register = async () => {
  errorMessage.value = '';
  successMessage.value = '';

  const { data, error } = await useFetch('/api/auth/register', {
    method: 'POST',
    body: { email: email.value, password: password.value },
  });

  if (error.value) {
    errorMessage.value = error.value.statusMessage ?? 'An unknown error occurred';
  } else {
    router.push('/login');
  }
};
</script>

<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>