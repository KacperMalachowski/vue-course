<template>
  <button @click="increment">{{ counter }}</button>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0)

    const increment = () => counter.value++

    return {
      counter,
      increment
    }
  }
}
</script>