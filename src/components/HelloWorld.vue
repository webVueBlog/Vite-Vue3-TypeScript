<template>
  <div>
    <div>{{ msg }}</div>
    <div>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </div>

    <div>See <code>README.md</code> for more information.</div>

    <div>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </div>

    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// eslint-disable-next-line no-undef
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
