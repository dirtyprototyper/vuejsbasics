<template>
  <div>
    <Vuexmodule />
  </div>
</template>

<script>
import Vuexmodule from "../components/module/modulecomp.vue";
export default {
  name: "thevuexmodule",
  components: {
    //calling the components
    Vuexmodule,
  },
};
</script>
