export default {
  name: "formModule",
  //  make each module self-contained, we have to namespace it by setting the namespaced option to true
  namespaced: true,
  state: () => ({
    formuser: {
      email: "formuser@gmail.com",
      name: "formuser",
      password: "theformuser",
    },
  }),

  mutations: {
    savedata(state, payload) {
      //   console.log("save data");
      //   console.log(payload.email);
      //   console.log(payload.name);

      //   console.log("state");
      //   console.log(state.formuser.email);

      //if correct
      state.formuser.email = payload.email;
      state.formuser.name = payload.name;
      state.formuser.password = payload.password;
    },
  },
  actions: {
    savedata({ commit }, payload) {
      commit("savedata", payload);
    },
  },
};
