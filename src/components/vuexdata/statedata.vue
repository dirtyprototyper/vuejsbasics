<template>
  <!--vue state, counter -->
  <div style="border: 1px solid black">
    <p>Normal Counter:{{ count }}</p>
    <p>With Counter with Getters :{{ doublecounter }}</p>

    <button @click="increment">+1</button>
    <button @click="decrements">-1</button>
    <br />
    <!-- <button @click="increment2">+2</button> -->
    <!--  <button @click="decrement2">-2</button> -->
    <button @click="doneTodosCount">-2</button>
  </div>
  <br />
  <br />

  <div style="border: 1px solid black; margin-top 2%">
    <span>
      The input hardcode to the state (array of object's friends friend).
    </span>
    <br />

    <div style="border: 1px solid black; margin-top 2%">
      <br />
      <form @submit.prevent="saveData">
        <!-- <li v-for="(item, index) in friends" :key="item.friend">
          <input @input="updateValue('friend', index, $event.target.value)" />
        </li> -->

        <label for="friend">Friend Name</label>
        {{ friends.friend }}
        <input
          @input="updateValue(0, $event.target.value)"
          type="text"
          name="friend"
        />

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
          <input disabled type="submit" value="Submit" />
        </p>
      </form>
    </div>

    <br />
    <br />
    <br />

    <span> 2 Way Data Binding </span> <br />
    <div style="border: 1px solid black; padding: 2%">
      <!--take note that the key need to be the index, otherwise you cannot bind to v-model as it loses focus after 1 characater-->
      <!-- https://stackoverflow.com/questions/43074144/vue-js-input-field-loses-its-focus-after-entry-of-one-character -->
      <li v-for="(item, index) in friends" :key="index">
        {{ index }}- {{ item.friend }}
        <!-- <input v-model="item.friend" /> -->
        <input v-model="item.friend" />

        {{ item.age }}
        <input v-model="item.age" type="number" />
        {{ item.type }}
        <label for="type">type of friend</label>
        <select v-model="item.type">
          <option>Primary</option>
          <option>secondary</option>
          <option>Others</option>
        </select>
      </li>
      <br />

      {{ friends }}
    </div>
  </div>

  <br />
  <br />
  <!-- using getters to return data with that particular property-->
  Vuex Getter
  <div style="border: 1px solid black">{{ doneTodosCount }}</div>

  <br />
  <br />
  cart for actions
  <div style="border: 1px solid black">
    {{ cart }}
    <input v-model="cartitem" type="string" />
    <button @click="additem">add</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { store } from "../../store/store.js";
import { mapMutations } from "vuex";

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

    //commented temp
    friends: {
      get() {
        return store.state.friends;
      },

      set(value) {
        print(value);
        store.commit("savedata", value);
      },
    },

    //getters
    doneTodosCount() {
      return store.getters.doneTodos;
    },
    doublecounter() {
      return store.getters.doubleCount;
    },

    cart: {
      get() {
        return store.state.cart;
      },

      set(val) {
        store.commit("savecart", val);
      },
    },

    cartitem: {
      get() {
        return store.state.cartitem;
      },

      set() {
        // store.commit("cartitem");
      },
    },
  },

  methods: {
    updateValue(index, value) {
      store.commit("savedata", { index, value });
    },

    additem() {
      console.log(this.cartitem);
      store.commit("savecart", this.cartitem);
    },

    //if its the same name. increment (component @click) to increment (in store)
    ...mapMutations(["increment"]),
    // increment() {
    //   store.commit("increment");
    // },

    //if its the different name. decrements (component @click ) to decrement (in store)
    ...mapMutations({
      decrements: "decrement",
    }),
    // decrements() {
    //   store.commit("decrement");
    // },
  },

  // actions: {},
};

//https://medium.com/swlh/adding-modules-to-a-vuex-store-8afead95e5af
//https://blog.logrocket.com/a-complete-guide-to-mapping-in-vuex/
//https://blog.openreplay.com/learn-how-mapping-works-in-vuex

//https://blog.logrocket.com/using-vuex-4-with-vue-3/
//  https://vuex.vuejs.org/guide/state.html#getting-vuex-state-into-vue-components
</script>
