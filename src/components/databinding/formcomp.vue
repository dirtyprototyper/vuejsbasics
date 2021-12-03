<template>
  <br />
  <br />

  <div class="hello">
    <h1>Another component (FormComp) in the same view</h1>
    <v-card style="border: 5px solid green">
      <!-- msg prop from databinding view-->
      <h2>{{ msgs }}</h2>
    </v-card>
  </div>

  <div style="margin-left: auto; margin-right: auto; width: 80%">
    <!-- <form
      id="app"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post"
    > -->
    <form @submit.prevent="checkForm">
      <!-- <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
      </p> -->

      <v-card elevation="3">
        <!-- the inputs within the cards -->
        <div
          style="
            margin-left: auto;
            margin-right: auto;
            width: 50%;
            margin-top: 2%;
          "
        >
          <!-- <label for="name">Name</label> -->
          <!-- <input id="name" v-model="name" type="text" name="name" /> -->
          <v-text-field
            style="border: 5px solid red"
            label="Name"
            v-model="name"
            type="text"
            name="name"
          ></v-text-field>
        </div>

        <div
          style="
            margin-left: auto;
            margin-right: auto;
            width: 50%;
            margin-top: 2em;
          "
        >
          <!-- <label for="age">Age</label> -->
          <!-- <input id="age" v-model="age" type="number" name="age" min="0" /> -->
          <v-text-field
            style="border: 5px solid red"
            label="Age"
            v-model="age"
            type="number"
            name="age"
            min="0"
          ></v-text-field>
        </div>

        <div style="margin-left: auto; margin-right: auto; width: 25%">
          <span>v-select for vuetify not available in 3.0 Alpha </span> <br />
          <v-card style="border: 5px solid red">
            <label for="movie">Favorite Movie</label>
            <select
              id="movie"
              v-model="movie"
              name="movie"
              style="border: 1px solid black"
            >
              <option>Star Wars</option>
              <option>Vanilla Sky</option>
              <option>Atomic Blonde</option>
            </select>
          </v-card>
        </div>
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
      </v-card>

      <!-- <input type="submit" value="Submit" /> -->
    </form>
  </div>

  <div style="margin-left: auto; margin-right: auto; width: 80%">
    <v-card style="margin-top: 2%">
      <div>
        <v-card
          elevation="3"
          style="text-align: center; border: 5px solid green"
        >
          <!--    Data change from top card within the same component.-->
          Name: {{ name }} <br />
          Age: {{ age }} <br />
          Movie: {{ movie }} <br />
        </v-card>
      </div>
    </v-card>
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
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      selection: [],
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
