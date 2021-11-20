// import vue from "vue";

//Using vue3 -> refer to vue4 documentation: https://next.vuex.vuejs.org/
// npm install vuex@next --save
import Vuex from "vuex";

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

    friend: "",
    // age: "",
    // type: "",
  },

  /* yet to figure out how this really works
  getters: {
    doubleCount: (state) => {
      console.log("dc");
      console.log(state.count);
      console.log(state.count * 2);

      return (state) => state.count * 2;
    },
  },
*/
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,

    savedata: (state, friend) => {
      console.log(state.friend);
      state.friend = friend;
    },
  },
});
