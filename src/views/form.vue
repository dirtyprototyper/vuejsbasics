<template>
  <div class="form">
    <h2>Welcome to form.vue</h2>

    <div style="border: 1px solid black">
      <div>
        <div>The following will change after you press submit in formcomp</div>
        user: {{ name }}, <br />
        age: {{ age }}
      </div>

      <!--both are valid event emitters -->
      <!-- <formcomps msgs="The Reactive Form" @myCustomEvent="userChange($event)" /> -->
      <formcomps
        msgs="The Reactive Form"
        v-on:myCustomEvent="userChange($event)"
      />
    </div>
    <br />

    <div style="border: 1px solid red">
      <DisplaytheData msgs="form data" />
    </div>
  </div>

  <!--show that vuex / store data can be shown in another view-->
  <div>
    If you go to vuestore and change the number, it will changes this as well.
    data is controlled in Vuex.Store at index.js
    <br />
    the count number is:{{ count }}
  </div>
</template>

<script>
//Note! do not put curly braces for the component that you are importing
import DisplaytheData from "../components/form/display.vue";
import formcomps from "../components/form/formcomp.vue";
import { store } from "../store/store.js";

export default {
  name: "Form",
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
