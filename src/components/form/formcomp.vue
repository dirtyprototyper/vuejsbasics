<template>
  <div class="hello">
    <h1>'Formcomp' component</h1>
    <h2>{{ msgs }}</h2>
  </div>

  <div>
    <!-- <form
      id="app"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post"
    > -->
    <form id="appform" @submit.prevent="checkForm">
      <!-- <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
      </p> -->

      <p>
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text" name="name" />
      </p>

      <p>
        <label for="age">Age</label>
        <input id="age" v-model="age" type="number" name="age" min="0" />
      </p>

      <p>
        <label for="movie">Favorite Movie</label>
        <select id="movie" v-model="movie" name="movie">
          <option>Star Wars</option>
          <option>Vanilla Sky</option>
          <option>Atomic Blonde</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>

  <div>
    <p>
      Name: {{ name }} <br />
      Age: {{ age }} <br />
      Movie: {{ movie }} <br />
    </p>
  </div>
</template>

<script>
export default {
  name: "formcomps",
  //props allows us to pass data from parent to child
  props: {
    msgs: String,
  },

  data() {
    return {
      //stuffs u want to return
      errors: [],
      name: null,
      age: null,
      movie: null,
    };
  },

  mounted() {
    //   setInterval(() => {
    //     this.counter++;
    //   }, 1000);
  },
  computed: {},
  emits:
    //declaring what is to be emitted
    ["myCustomEvent"],
  //test: to see if this works for submit button. After i settled vuex store/ vue statemeanagement
  //  {
  //   submit: (d) => {
  //     console.log("submitted");
  //     console.log(d);
  //     if (d) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },

  methods: {
    //Submit the form
    checkForm: function (e) {
      if (this.name && this.age) {
        console.log("checkform logging");

        this.$emit("myCustomEvent", { name: this.name, age: this.age });
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.age) {
        this.errors.push("Age required.");
      }

      e.preventDefault();
    },
  },
};
</script>
