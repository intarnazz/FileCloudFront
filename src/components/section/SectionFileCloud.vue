<script setup>
import { ref } from 'vue'
import { FilePost } from '@/api/api.js'

const file = ref('')

async function fileUpLoad() {
  const res = await FilePost('6|zM3U3QJB9oxvSEP9wjseAHqwHaxv7SQhI6lFiU1U', file.value.files[0])
  console.log(res)
}
</script>

<template>
  <section class="FileCloud">
    <form @submit.prevent="fileUpLoad">
      <input ref="file" type="file" />
      <input type="submit" />
    </form>
  </section>
</template>

<style scoped>

</style>
