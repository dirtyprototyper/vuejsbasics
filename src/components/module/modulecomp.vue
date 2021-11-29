<!--https://medium.com/swlh/adding-modules-to-a-vuex-store-8afead95e5af-->

<template>
  <br />

  the number in module A {{ a.number }} <br />
  <button @click="increaseA({ amount: 10 })">Increase</button>
  <br />
  <br />
  the number in module b is {{ b.number }} <br />
  <button @click="increaseB({ amount: 10 })">Increase</button>
</template>

<script>
// import { mapActions } from "vuex";
import { mapState } from "vuex";
// import { store } from "../../store/store.js";
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
