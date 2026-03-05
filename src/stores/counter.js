import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: [],
    recurring: []
  }),

  actions: {
    addCounter(expense) {
      this.counter.push(expense)
    },
    addRecurring(expense) {
      this.recurring.push(expense)
    }
  },

  getters: {
    totalCount: (state) =>
      state.counter.reduce((total, item) => total + item.value, 0)
  }
})
