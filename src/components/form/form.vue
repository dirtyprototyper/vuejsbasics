<template>
  <!--action allow us to redirect them to another url -->
  <!-- <form style="margin-top: 1em" @submit="handleSubmit.prevent" action="/home" > -->

  <!-- form SetA. Using this method of binding, there is no point of submit?? because all your values are the most updated. 
You probably will want to
 -->
  <form style="margin-top: 1em" @submit="handleSubmit.prevent">
    <label>
      Email:
      <input
        style="border: 1px solid black"
        type="email"
        v-model="fm.formuser.email"
      />
    </label>
    <label>
      Name:
      <input
        style="border: 1px solid black"
        type="text"
        v-model="fm.formuser.name"
      />
    </label>
    <label>
      Password:
      <input
        style="border: 1px solid black"
        type="password"
        v-model="fm.formuser.password"
      />
    </label>
    <br />
    <v-btn
      style="
        width: 15%;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: 1em;
      "
      type="submit"
      disabled
      @click="handleSubmit()"
      >Submit</v-btn
    >

    <v-btn
      style="
        width: 15%;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: 1em;
      "
      type="submit"
      @click="handlelog()"
      >logit</v-btn
    >
  </form>

  <br />
  <br />
  <br />

  <!--form2 -->
  <h1>localformuser</h1>
  <form style="margin-top: 1em" @submit="handleSubmit.prevent">
    <label>
      Email:
      <input
        style="border: 1px solid black"
        type="email"
        v-model="localformuser.email"
      />
    </label>
    <label>
      Name:
      <input
        style="border: 1px solid black"
        type="text"
        v-model="localformuser.name"
      />
    </label>
    <label>
      Password:
      <input
        style="border: 1px solid black"
        type="password"
        v-model="localformuser.password"
      />
    </label>
    <br />
    <v-btn
      style="
        width: 15%;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: 1em;
      "
      type="submit"
      @click="handleSubmit2()"
      >Submit2</v-btn
    >

    <v-btn
      style="
        width: 15%;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: 1em;
      "
      type="submit"
      @click="handlelog2()"
      >logit2</v-btn
    >
  </form>

  <h2>Either of the form</h2>
  <div>
    {{ fm.formuser }}
  </div>
</template>

<script>
import { mapState } from "vuex";
import { store } from "../../store/store.js";
export default {
  name: "formcomp",

  data() {
    return {
      localformuser: {
        email: "localformuser@gmail.com",
        name: "localformuser",
        password: "thelocalformuser",
      },
    };
  },
  computed: {
    ...mapState({
      fm: (state) => state.fm,
    }),
  },

  methods: {
    //      increaseA(payload) {
    //   //this is how you get the state from that particular module you mapped to
    //   console.log(store.state.a.number);

    //   // this.store.dispatch("a/increase", payload);
    //   this.$store.dispatch("a/increase", payload);
    // },

    handlelog() {
      console.log(store.state.fm.formuser);
    },

    handleSubmit() {
      console.log("submit");
      console.log(store.state.fm.formuser.email);
      // Send data to the server or update your stores and such.
      this.$store.dispatch("fm/savedata", {
        email: "ok@gmail.com",
        name: "ss",
        password: "dam",
      });
      console.log("end of handlesubmit");
    },

    //second set of form

    handlelog2() {
      console.log(this.localformuser);
    },

    handleSubmit2() {
      console.log(this.localformuser);

      this.$store.dispatch("fm/savedata", this.localformuser);
    },
  },
};

//https://stackoverflow.com/questions/69633843/how-to-wait-for-action-to-complete-before-accessing-the-vue-store-state
</script>
