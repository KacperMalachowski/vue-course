## Vuex Store

Vuex is a flux implementation for vue. It's similar for react's redux.
The main disadvantage of using vuex is lack of typescript support.

Example vuex store:
```ts
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: { count: number; }) {
      state.count++
    }
  }
})

export default store
```

Now create store that will keep information about todos