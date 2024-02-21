<script setup lang="ts">
import {ref} from 'vue'

const counter = ref(0)

const increment = () => counter.value++
</script>

<template>
  <button @click="increment">{{ counter }}</button>
</template>