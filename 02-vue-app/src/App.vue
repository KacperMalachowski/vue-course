<script setup lang="ts">
import CompositionCounter from './components/CompositionCounter.vue';
import OptionsCounter from './components/OptionsCounter.vue';

</script>

<template>
  Composition counter: <CompositionCounter /> <br />
  Options counter: <OptionsCounter />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
