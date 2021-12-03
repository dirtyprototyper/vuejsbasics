<!--https://medium.com/swlh/adding-modules-to-a-vuex-store-8afead95e5af-->

<template>
  <br />
  <h1 style="margin-left: 1em">Module in datastore</h1>
  <div style="border: 1px solid black; text-align: center">
    <h1>Module A</h1>
    <v-card
      style="border: 5px solid green; margin-left: 1em; margin-right: 1em"
    >
      the number in module A {{ a.number }} <br />
    </v-card>
    <br />
    <v-card style="border: 5px solid red; margin-left: 1em; margin-right: 1em">
      <v-btn
        style="
          display: block;
          margin-top: 1em;
          margin-left: auto;
          margin-right: auto;
          width: 20%;
        "
        @click="increaseA({ amount: 10 })"
        >Increase</v-btn
      >
    </v-card>
    <br />
  </div>
  <br />
  <br />

  <div style="border: 1px solid black; text-align: center">
    <h1>Module B</h1>

    <v-card
      style="border: 5px solid green; margin-left: 1em; margin-right: 1em"
    >
      the number in module b is {{ b.number }} <br />
    </v-card>
    <br />
    <v-card style="border: 5px solid red; margin-left: 1em; margin-right: 1em">
      <v-btn
        style="
          display: block;
          margin-top: 1em;
          margin-left: auto;
          margin-right: auto;
          width: 20%;
        "
        @click="increaseB({ amount: 10 })"
        >Increase</v-btn
      >
    </v-card>

    <br />
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import { mapState } from "vuex";
// import { store } from "../../store/store";
// import { mapMutations } from "vuex";

export default {
  name: "Vuexmodule",

  computed: {
    ...mapState({
      a: (state) => state.a,
      b: (state) => state.b,
    }),
  },
  methods: {
    increaseA(payload) {
      // this.store.dispatch("a/increase", payload);
      this.$store.dispatch("a/increase", payload);
    },
    increaseB(payload) {
      this.$store.dispatch("b/increase", payload);
    },
  },
};
</script>
