<script setup lang="ts">

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const login = async () => {
  errorMessage.value = '';

  const { data, error } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: { email: email.value, password: password.value },
    credentials: 'include',
  });

  if (error.value) {
    errorMessage.value = error.value.statusMessage ?? 'An unknown error occurred';
  } else {
    router.push('/dashboard');
  }
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>