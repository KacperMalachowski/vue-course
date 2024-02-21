<script setup lang="ts">
import {reactive, ref} from 'vue'

const counter = ref({ counter: 0, counters: { nested: 0}})
const reactiveCounter = reactive({ counter: 0, counters: { nested: 0}})


console.log(counter.value.counters.nested)
console.log(reactiveCounter.counters.nested)
</script>

<template></template>