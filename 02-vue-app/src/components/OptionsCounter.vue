<template>
  <button @click="increment">{{ counter }}</button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    }
  }
}
</script>