<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>It is another view</h2>
    {{ drinkitem }}
  </div>
</template>

<script>
import { store } from "../store/store";

export default {
  computed: {
    //best way.  especially if datastore is in strict mode
    drinkitem: {
      get() {
        return store.state.drinkitem;
      },

      set(value) {
        store.state.drinkitem = value;
      },
    },
  },
};
</script>
