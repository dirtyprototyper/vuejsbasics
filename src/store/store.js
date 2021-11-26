// import vue from "vue";

//Using vue3 -> refer to vue4 documentation: https://next.vuex.vuejs.org/
// npm install vuex@next --save
import Vuex from "vuex";

/*things to test:
1. Getters
2. MApping
3. Action
*/

export const store = new Vuex.Store({
  //possible properties:
  //  States are properties that store data in our Vuex store; they let us access the data from anywhere in our Vue 3 app.
  // state: {},

  //Mutations are functions that let us modify states
  // mutations: {},

  //Getters are functions that return a state, or states that have been operated on or combined with other values.
  // getters: {},

  //action methods that let us run mutations to modify a state.
  // actions: {},

  //global state
  state: {
    count: 0,

    friends: [
      { friend: "tom", age: 12, type: "Primary" },
      { friend: "dick", age: 13, type: "Secondary" },
    ],

    cart: ["apple", "orange", "pear"],
    drinkitem: "drinkitem",
    // fooditem: "fooditem",

    // age: "",
    // type: "",

    distance: 0,
    alocation: "somestuff",

    locations: [],
  },

  getters: {
    //this filters all the friends that were met in primary
    doneTodos: (state) => {
      return state.friends.filter((x) => x.type == "Primary");
    },

    //this double the count by 2.
    doubleCount: (state) => {
      return state.count * 2;
    },
  },

  //mutations have to be synchronous: task performed one at a time
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,

    adddrink: (state) => {
      console.log(state);
      console.log(state.drinkitem);
    },

    //state,payload only.
    //https://next.vuex.vuejs.org/guide/mutations.html#object-style-commit
    //for friend
    savedata: (state, thepayload) => {
      state.friends[thepayload.index].friend = thepayload.value;
    },

    //for cart
    savecart: (state, theitem) => {
      // console.log("savecart");
      // // casually logging to show that drinkitem exists in the store.js
      // console.log(state.drinkitem);

      state.cart.push(theitem.theitem);

      // console.log(state.cart);
    },

    //another mutation for numbers, but using actions
    travelforward(state) {
      state.distance++;
    },
    travelbackward(state) {
      state.distance--;
    },

    distanceincrement: (state) => {
      console.log("distance increse"), state.distance++;
    },
    distancedecrement: (state) => state.distance--,

    //string and objcets
    addlocation: (state, place) => {
      console.log(place);
      state.locations.push(place);
    },

    //another mutation for strings, but using acitons
  },

  //asynchronous:deal with multiple task at a time
  actions: {
    travelforward(context) {
      context.commit("travelforward");

      //other possible
      //comntext.state
      //context.getters
      //context.dispatch
    },

    travelbackward(context) {
      context.commit("travelbackward");
    },

    //for string and object
    addlocation2(context, mylocation) {
      //call the method and pass the item over.
      context.commit("addlocation", mylocation);
    },
  },
});
