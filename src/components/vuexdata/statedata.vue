<template>
  <!--vue state, counter -->
  number mutations. Using map mutation
  <div style="border: 1px solid black">
    <p>Normal Counter:{{ count }}</p>
    <p>With Counter with Getters :{{ doublecounter }}</p>

    <button @click="increment">+1</button>
    <button @click="decrements">-1</button>
    <br />
  </div>
  <br />
  <br />

  Using method to update friends friend value | Proper binding and changing of
  state in data store for array of objects
  <div style="border: 1px solid black; margin-top 2%">
    <span>
      The input hardcode to the state (array of object's friends friend).
    </span>
    <br />

    <div style="border: 1px solid black; margin-top 2%">
      <br />
      <form @submit.prevent="saveData">
        <label for="friend">Friend Name</label>
        {{ friends.friend }}
        <input
          @input="updateValue(0, $event.target.value)"
          type="text"
          name="friend"
        />

        <p>
          <input disabled type="submit" value="Submit" />
        </p>
      </form>
    </div>

    <br />
    <br />
    <br />

    <span> 2 Way Data Binding for datastore's array of object </span> <br />
    <div style="border: 1px solid black; padding: 2%">
      <!--take note that the key need to be the index, otherwise you cannot bind to v-model as it loses focus after 1 characater-->
      <!-- https://stackoverflow.com/questions/43074144/vue-js-input-field-loses-its-focus-after-entry-of-one-character -->
      <li v-for="(item, index) in friends" :key="index">
        Number: {{ index }}.
        <br />
        Friend name: {{ item.friend }}
        <!-- <input v-model="item.friend" /> -->
        <input v-model="item.friend" />
        <br />
        Friend Age: {{ item.age }}
        <input v-model="item.age" type="number" />
        <br />
        Friend From:

        {{ item.type }}

        <label for="type">type of friend</label>
        <select v-model="item.type">
          <option>Primary</option>
          <option>Secondary</option>
          <option>Others</option>
        </select>
        <br />
        <br />
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

  cart with drinkitem and fooditem. <br />
  Showcasing how to have item in store.js(drinkitem) and without it(fooditem)
  existing.
  <div style="border: 1px solid black">
    {{ cart }}
    <br />
    <br />
    drinkitem:{{ drinkitem }}
    <input v-model="drinkitem" type="string" />
    <button @click="additem1">add</button>

    <br />
    fooditem : {{ fooditem }}
    <input v-model="fooditem" type="string" />

    <button @click="additem2">add</button>
  </div>
  <br />
  <br />

  vuex actions with numbers
  <div style="border: 1px solid black">
    {{ distance }}
    <br />
    instead of mutation which as sync<br />
    <button @click="distanceincrement">+1</button>
    <button @click="distancedecrement">-1</button>
    <br />

    use Actions instead as they are async <br />
    <button @click="travelforward">+1</button>
    <button @click="travelbackward">+1</button>
  </div>

  vuex actions with string and object
  <div style="border: 1px 1px solid black">
    {{ locations }}

    <br />
    alocation: {{ alocation }}
    <input v-model="alocation" type="string" />
    <button @click="addlocation">save</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { store } from "../../store/store";

import { mapMutations } from "vuex";

export default {
  name: "Statedata",

  //Parse data only, where you do not need it to exist within the data store
  data() {
    return {
      fooditem: null,
      // alocation: null,
    };
  },

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

    //method1: To get back values from store.js. This return a read-only.
    ...mapState(["count"]), //use it when there is no need to do any string setting

    //method2: To get back value from store.js. This returns also a read-only value. It is a short hand of the above.
    //   count() {
    //     return store.state.count;
    //   },

    // cannot use mapstate with set. If not there will be warn. Take note: by default, read only, unless there is set
    // ...mapState(["friend"]),

    //Eg: if you need to back value and set values from store.js
    friends: {
      //Get value
      get() {
        return store.state.friends;
      },

      //set value
      set(value) {
        store.commit("savedata", value);
      },
    },

    // 2 examples for Getters.
    // You simply return pre-defined stuffs in store.js by calling it
    doneTodosCount() {
      return store.getters.doneTodos;
    },
    doublecounter() {
      return store.getters.doubleCount;
    },

    //The following test on action
    cart: {
      get() {
        return store.state.cart;
      },
    },

    //for action
    distance: {
      get() {
        return store.state.distance;
      },
    },

    ...mapState(["locations"]),
    alocation: {
      get() {
        return store.state.alocation;
      },

      set(value) {
        store.state.alocation = value;
      },
    },
  },

  methods: {
    /*Mutation */

    //this is how to save object to store. Parse the object as payload
    updateValue(index, value) {
      store.commit("savedata", { index, value });
    },

    //this is how to save simple string to store. Can simply pass the string as payload as well
    additem1() {
      store.commit("savecart", { theitem: this.drinkitem });
      // store.commit("savecart", this.drinkitem );
    },

    additem2() {
      store.commit("savecart", { theitem: this.fooditem });
    },

    /*Mapping Mutation*/

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

    /* For actions */
    ...mapMutations(["distanceincrement"]),
    ...mapMutations(["distancedecrement"]),
    ...mapActions(["travelforward"]),
    ...mapActions(["travelbackward"]),

    // ...mapActions({ addlocation2: "addlocation2", mylocation: location }),

    //if you need mapping.. if not, just use normal mapping for action
    ...mapActions({ addlocation2: "addlocation2" }),

    //@click invoked the following
    addlocation() {
      //calls the action in store.js
      this.addlocation2(this.alocation);
    },

    // addlocation() {
    //   console.log(this.location),
    //       ...mapActions(['addlocation',this.location])
    //   },
  },

  // actions: {},
};

//https://vuex.vuejs.org/guide/modules.html#module-local-state

//todo modules
</script>
