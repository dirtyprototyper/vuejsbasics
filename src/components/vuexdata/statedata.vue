<template>
  <!--vue state, counter -->
  <div style="border: 1px solid black">
    <p>{{ count }}</p>

    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <br />
    <!-- <button @click="increment2">+2</button> -->
    <!--  <button @click="decrement2">-2</button> -->
  </div>
  <br />
  <br />

  <div style="border: 1px solid black; margin-top 2%">
    <form @submit.prevent="saveData">
      <p>
        <label for="friend">Friend Name</label>
        <input id="friend" v-model="friend" type="text" name="friend" />
      </p>

      <!-- <p>
        <label for="age">Age</label>
        <input id="age" v-model="age" type="number" name="age" min="0" />
      </p>

      <p>
        <label for="type">type of friend</label>
        <select id="type" v-model="type" name="type">
          <option>Primary</option>
          <option>secondary</option>
          <option>Others</option>
        </select>
      </p> -->

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { store } from "../../store/store.js";

export default {
  name: "Statedata",

  computed: {
    //method1:
    ...mapState(["count"]), //use it when there is no need to do any string setting

    //method2:
    //   count() {
    //     return store.state.count;
    //   },

    // cannot use mapstate with set. If not there will be warn. Take note: by default, read only, unless there is set
    // ...mapState(["friend"]),

    friend: {
      get() {
        return store.state.friend;
      },

      set(value) {
        store.commit("savedata", value);
      },
    },
  },

  //https://blog.logrocket.com/using-vuex-4-with-vue-3/
  //  https://vuex.vuejs.org/guide/state.html#getting-vuex-state-into-vue-components

  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
    // getDetails(value) {
    //   console.log("getdetails")
    //   this.friend = value;
    // },
  },
};
</script>
