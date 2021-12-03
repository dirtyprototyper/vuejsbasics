<!--https://next.vuetifyjs.com/en/components/buttons/#examples -->
<template>
  <br />
  <!--vue state, counter -->
  <h1 style="margin-left: 1em">Number Mutations. Using Map Mutation</h1>
  <div style="border: 1px solid black">
    <div
      style="
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        text-align: center;
      "
    >
      <v-card style="border: 5px solid green">
        <p>Normal Counter:{{ count }}</p>
        <p>With Counter with Getters :{{ doublecounter }}</p>
      </v-card>

      <v-card style="border: 5px solid red">
        <v-btn @click="increment"> +1 </v-btn>
        <v-btn @click="decrements"> -1 </v-btn>
      </v-card>
      <!-- <button @click="increment">+1</button> -->
      <!-- <button @click="decrements">-1</button> -->
      <br />
    </div>
  </div>
  <br />
  <br />

  <h1 style="margin-left: 1em">
    Using method to update friends friend value <br />
    | Proper binding and changing of state in data store for array of objects
  </h1>
  <div style="text-align: center;border: 1px solid black; margin-top 2%">
    <span>
      The input hardcode to the state (array of object's friends friend).
    </span>
    <br />

    <div style="border: 1px solid black; margin-top 2%">
      <br />
      <form @submit.prevent="saveData">
        <label for="friend">Friend Name</label>
        <input
          style="border: 5px solid red"
          @input="updateValue(0, $event.target.value)"
          type="text"
          name="friend"
        />
        <!--       
        <v-text-field
          label="friend's name"
          @input="updateValue(0, $event.target.value)"
          type="text"
          name="friend"
        >
        </v-text-field> -->

        <p>
          <v-btn
            type="submit"
            value="Submit"
            style="
              display: block;
              margin-top: 2%;
              margin-left: auto;
              margin-right: auto;
              width: 20%;
            "
          >
            submit
          </v-btn>

          <!-- <input disabled type="submit" value="Submit" /> -->
        </p>
      </form>
    </div>

    <br />
    <br />
    <br />

    <h1 style="margin-left: 1em">
      2 Way Data Binding for datastore's array of object
    </h1>
    <br />
    <div style="border: 1px solid black; padding: 2%; text-align: center">
      <!--take note that the key need to be the index, otherwise you cannot bind to v-model as it loses focus after 1 characater-->
      <!-- https://stackoverflow.com/questions/43074144/vue-js-input-field-loses-its-focus-after-entry-of-one-character -->
      <span> listed items</span>
      <v-card
        v-for="(item, index) in friends"
        :key="index"
        style="border: 1px solid black; margin-top: 1.5em"
      >
        <v-card style="border: 5px solid green; margin-top: 2em">
          Binded Output| Number: {{ index }}.
        </v-card>
        <br />
        <v-card style="border: 5px solid green">
          Binded Output| Friend name: {{ item.friend }}
          <!-- <input v-model="item.friend" /> -->
          <v-card style="border: 5px solid red">
            Binded Input Area:
            <input style="border: 1px solid black" v-model="item.friend" />
          </v-card>
        </v-card>
        <br />
        <v-card style="border: 5px solid green">
          Binded Output| Friend Age: {{ item.age }}
          <v-card style="border: 5px solid red">
            Binded Input Area:
            <input
              style="border: 1px solid black"
              v-model="item.age"
              type="number"
            />
          </v-card>
        </v-card>
        <br />
        <v-card style="border: 5px solid green">
          Binded Output| Friend From:
          {{ item.type }}

          <br />

          <v-card style="border: 5px solid red">
            Binded Input Area:<label for="type">type of friend: </label>
            <select v-model="item.type" style="border: 1px solid black">
              <option>Primary</option>
              <option>Secondary</option>
              <option>Others</option>
            </select>
          </v-card>
        </v-card>

        <br />
        <br />
      </v-card>
      <br />

      <v-card style="border: 5px solid green">
        From above:
        {{ friends }}
      </v-card>
    </div>
  </div>

  <br />
  <br />
  <!-- using getters to return data with that particular property-->
  <h1 style="margin-left: 1em">Vuex Getter</h1>
  <div style="border: 1px solid black">
    <v-card style="border: 5px solid green; margin: 1em">
      {{ doneTodosCount }}
    </v-card>
  </div>

  <br />
  <br />

  <h1 style="margin-left: 1em">
    Showcasing how to have item in store.js(drinkitem) and without it(fooditem)
    existing. | <br />
    (cart with drinkitem and fooditem. )
  </h1>
  <div style="border: 1px solid black">
    <v-card style="border: 5px solid green; margin: 1%">
      the cart items: {{ cart }} <br />
      reflected after you press the "add" button for food item or drink item
    </v-card>
    <br />
    <br />

    <v-card style="border: 1px solid black; text-align: center">
      <br />
      Binded Output:
      <v-card
        style="border: 5px solid green; margin-left: 1em; margin-right: 1em"
      >
        The drinkitem (bind to the input text only):
        {{ drinkitem }}
      </v-card>
      <br />
      Binded Input:
      <v-card
        style="border: 5px solid red; margin-left: 1em; margin-right: 1em"
      >
        Modify drinkitem here:
        <input
          v-model="drinkitem"
          style="border: 1px solid black; margin: 1em"
          type="string"
        />
      </v-card>
      <v-btn
        @click="additem1"
        style="
          display: block;
          margin-top: 2%;
          margin-bottom: 2%;
          margin-left: auto;
          margin-right: auto;
          width: 15%;
        "
        >add</v-btn
      >
    </v-card>

    <br />

    <v-card style="border: 1px solid black; text-align: center">
      <br />
      Binded Output:
      <v-card
        style="border: 5px solid green; margin-left: 1em; margin-right: 1em"
      >
        fooditem (bind to the input text only): {{ fooditem }}
      </v-card>
      <br />
      Binded Input:
      <v-card
        style="border: 5px solid red; margin-left: 1em; margin-right: 1em"
      >
        Modify food item here:
        <input
          v-model="fooditem"
          style="border: 1px solid black; margin: 1em"
          type="string"
        />
      </v-card>
      <v-btn
        @click="additem2"
        style="
          margin-bottom: 2%;
          display: block;
          margin-top: 2%;
          margin-left: auto;
          margin-right: auto;
          width: 15%;
        "
        >add</v-btn
      >
    </v-card>
  </div>
  <br />
  <br />

  <h1 style="margin-left: 1em">vuex actions with numbers</h1>
  <div style="border: 1px solid black; text-align: center">
    <br />
    <v-card
      style="border: 5px solid green; margin-left: 1em; margin-right: 1em"
    >
      Distance: {{ distance }}
    </v-card>
    <br />
    Instead of mutation which is sync, use Actions instead as they are async
    (both button will modify the same distance)
    <br />

    <v-card
      style="
        margin: 1%;
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        display: block;
        border: 1px solid black;
      "
    >
      Add Distance | Doing via Mutation:
      <v-btn
        style="border: 5px solid red; margin-right: 1em"
        @click="distanceincrement"
        >+1</v-btn
      >
      <v-btn style="border: 5px solid red" @click="distancedecrement">-1</v-btn>
    </v-card>
    <br />

    <v-card
      style="
        margin: 1%;
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        display: block;
        border: 1px solid black;
      "
    >
      Add Distance | Doing via Action:
      <v-btn
        style="border: 5px solid red; margin-right: 1em"
        @click="travelforward"
        >+1</v-btn
      >
      <v-btn style="border: 5px solid red" @click="travelbackward">+1</v-btn>
    </v-card>
  </div>

  <h1>vuex actions with string and object</h1>
  <div style="border: 1px solid black">
    <br />
    <v-card>
      <v-card
        style="border: 5px solid green; margin-left: 1em; margin-right: 1em"
      >
        list of locations added <br />
        (Binded Output:): {{ locations }}
      </v-card>
      <br />
      <v-card
        style="border: 5px solid green; margin-left: 1em; margin-right: 1em"
      >
        alocation (Binded Output) | Binded to the input below: {{ alocation }}
      </v-card>
      <br />
      <v-card
        style="border: 5px solid red; margin-left: 1em; margin-right: 1em"
      >
        <input
          style="border: 1px solid black"
          v-model="alocation"
          type="string"
        />
      </v-card>
      <v-btn
        style="
          margin-bottom: 2%;
          display: block;
          margin-top: 2%;
          margin-left: auto;
          margin-right: auto;
          width: 15%;
        "
        @click="addlocation"
        >save</v-btn
      >
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { store } from "../../store/store";

import { mapMutations } from "vuex";

export default {
  name: "Vuedatastore",

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
