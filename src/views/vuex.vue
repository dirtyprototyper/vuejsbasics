<template>
  <div>
    <Statedata />
  </div>
</template>

<script>
import Statedata from "../components/vuexdata/statedata.vue";

export default {
  name: "Mydata",
  components: {
    //calling the components
    Statedata,
  },
};
</script>
