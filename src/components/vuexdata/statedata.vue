<template>
  <!--vue state, counter -->
  <div>
    <p>{{ count }}</p>

    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <button @click="increment">+2</button>
    <button @click="decrement2">-2</button>
  </div>
</template>

<script>
import { store } from "../../store/store.js";

export default {
  name: "Statedata",

  //return the data from the store.
  // computed: {
  //   count() {
  //     return store.state.count;
  //   },
  // },

  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
  },
};
</script>
