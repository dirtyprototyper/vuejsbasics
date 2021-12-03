<template>
  <div class="form">
    <h2>Welcome to databinding view</h2>

    <div style="border: 1px solid black">
      <div>
        <div>The following will change after you press submit in formcomp</div>
        <v-card style="border: 5px solid green">
          <!-- When the form in formcomp is submitted, this will be adjusted acordingly-->
          user: {{ name }}, <br />
          age: {{ age }}
        </v-card>
      </div>

      <!--both are valid event emitters -->
      <!-- <formcomps msgs="The Reactive Form" @myCustomEvent="userChange($event)" /> -->
      <formcomps
        msgs="The Reactive Form"
        v-on:myCustomEvent="userChange($event)"
      />
    </div>
    <br />

    <div style="border: 3px solid yellow">
      <DisplaytheData msgs="form data" />
    </div>
    <br />
    <br />
  </div>

  <!--show that vuex / store data can be shown in another view-->
  <div>
    If you go to vuestore and change the number, it will changes this as well.
    data is controlled in Vuex.Store at index.js
    <br />
    <v-card style="border: 5px solid green">
      the count number is:{{ count }}
    </v-card>
  </div>

  <br />
  <div>
    <v-card style="border: 5px solid green">
      Testing Data store: {{ friend }}
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
//Note! do not put curly braces for the component that you are importing
import DisplaytheData from "../components/databinding/display.vue";
import formcomps from "../components/databinding/formcomp.vue";
import { store } from "../store/store.js";

export default {
  name: "Databinding",
  data() {
    return {
      name: "",
      age: "",
    };
  },

  components: {
    DisplaytheData,
    formcomps,
  },
  computed: {
    count() {
      return store.state.count;
    },
    ...mapState(["friend"]),
  },
  methods: {
    userChange(e) {
      console.log("userChanged");
      console.log(e);
      this.name = e.name;
      this.age = e.age;
    },
  },
};
</script>

<!--

https://vuejs.org/v2/cookbook/form-validation.html 
https://vuejs.org/v2/guide/forms.html


https://v3.vuejs.org/examples/markdown.html
https://v3.vuejs.org/guide/introduction.html#handling-user-input


-->
<!--https://vuex.vuejs.org/guide/state.html#single-state-tree-->
