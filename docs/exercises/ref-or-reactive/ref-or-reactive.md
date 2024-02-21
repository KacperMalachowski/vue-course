## What's difference between Ref and reactive?

Let's create a new component using both approach:
```vue
<script setup lang="ts">
import {reactive, ref} from 'vue'

const counter = ref({ counter: 0, counters: { nested: 0}})
const reactiveCounter = reactive({ counter: 0, counters: { nested: 0}})


console.log(counter)
console.log(reactiveCounter)
</script>
```

and use it inside the vue app:
```ts
import RefReactive from '../docs/exercises/ref-or-reactive/RefReactiveComponent.vue';
```
add the component inside the template:
```vue
<RefReactive />
```

Now let's check the difference. The ref wrap the object into RefImpl with `_value` as a Proxy object.
```json
{
    "__v_isShallow": false,
    "__v_isRef": true,
    "_rawValue": {
        "counter": 0,
        "counters": {
            "nested": 0
        }
    },
    "_value": {
        "counter": 0,
        "counters": {
            "nested": 0
        }
    }
}
```
For reactive it looks like the object become Proxy itself.
```json
{
    "counter": 0,
    "counters": {
        "nested": 0
    }
}
```

now lets change console log to way that we want to use the nested counter:

```js
console.log(counter.value.counters.nested)
console.log(reactiveCounter.counters.nested)
```

As you can see the ref wraps the data in custom object, when the reactive is creating nested Proxy objects.

Vue community currently agreed that ref is used for primitives and reactive for objects.