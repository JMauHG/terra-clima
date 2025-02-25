<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-900 text-white">
    <div class="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
            class="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p v-if="errorMessage" class="mt-4 text-red-500 text-center">
        {{ errorMessage }}
      </p>

      <p class="mt-4 text-center text-gray-400">
        Don't have an account?
        <router-link to="/register" class="text-blue-400 hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

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
