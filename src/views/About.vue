<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>
      Vue3 <br />
      vuex 4.0 <br />
      vuetify 3.0 alpha <br />
    </h2>
    <v-card>
      Created with Vue3 (
      <a href="https://v3.vuejs.org/guide/introduction.html"
        >https://v3.vuejs.org/guide/introduction.html </a
      >) and Vuex 4.0 (
      <a href="https://vuex.vuejs.org/guide/structure.html">
        https://vuex.vuejs.org/guide/structure.html </a
      >) using vuetify 3.0 alpha stage (Check the link for available features:
      <a href="https://next.vuetifyjs.com/en/getting-started/installation">
        https://next.vuetifyjs.com/en/getting-started/installation/. </a
      >)
    </v-card>
    <br />
    <v-card style="border: 5px solid green">
      <!--affected by vue data store-->
      {{ drinkitem }}
    </v-card>
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
