## Components Basic

Components in vue applications are reusable page elements. It allows developers to keeping clear structure of the application with the some custom visual styles.

The standard way of creating components in the vue world is single file components (SFCs).

Every component using that approach contains at least `template` block, but it also can contains `script`, `script setup` (for composition API) and `style` blocks.

Example component looks like:
```vue
<script setup lang="ts">
import {ref} from 'vue'

const counter = ref(0)

const increment = () => counter.value++
</script>

<template>
  <button @click="increment">{{ counter }}</button>
</template>
```

This is example of the components using composition API. We have here the counter that is created with ref function. Ref creates proxy object with value provided as default (here is a 0). Proxy objects allows Vue to keep track of changes of the property value that should cause rerender of the component.

It also contains a `increment` function that will increment the counter value. Please look that in the script setup we have to use a `.value` to access the value of the counter. It's a consequence of using a Proxy object. In the template the vue is unwraping the value itself so we don't need the `.value`.

On the other hand we still can use Options API which is more OOP like.
Example of the Options API component:

```vue
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
```

The main difference is a way that we define script block. Here we create a object that contains data fucntion, which is equivalent of a multiple `ref` function. In the methods block we define the methods that can be used inside the component. Another diffrence is the way that we access the properties, in the options API we use `this` keyword like in the standard JS objects.

The last way we can create SFC is a compositon in options style, we can achieve that using a setup function, like presented:

```vue
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
```
