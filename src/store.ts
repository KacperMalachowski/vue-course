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