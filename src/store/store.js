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
      { friend: "tom", age: 12, type: "primary" },
      { friend: "dick", age: 13, type: "secondary" },
    ],

    cart: ["apple", "orange", "pear"],
    cartitem: "add something",
    // age: "",
    // type: "",
  },

  getters: {
    doneTodos: (state) => {
      return state.friends.filter((x) => x.type == "primary");
    },

    doubleCount: (state) => {
      return state.count * 2;
    },
  },
  /* yet to figure out how this really works
  getters: {
    },
  },
*/
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,

    //state,payload only.
    //https://next.vuex.vuejs.org/guide/mutations.html#object-style-commit
    //for friend
    savedata: (state, thepayload) => {
      state.friends[thepayload.index].friend = thepayload.value;
    },

    //for cart
    savecart: (state, items) => {
      console.log(items);
      console.log(state.cartitem);

      state.cart.push(items);
    },
  },
});
