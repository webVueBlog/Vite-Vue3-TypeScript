<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <hello-world msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line import/no-unresolved
import HelloWorld from '@/components/HelloWorld.vue'
import axios from '@/utils/axios'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
