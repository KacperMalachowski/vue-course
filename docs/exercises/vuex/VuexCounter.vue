<template>
  <button @click="increment">{{ counter }}</button>
</template>

<script lang="ts">
import store from '../store'

export default {
  data() {
    return {
      counter: store.state.count
    }
  },
  methods: {
    increment() {
      store.commit('increment')
      this.counter = store.state.count
    }
  }
}
</script>