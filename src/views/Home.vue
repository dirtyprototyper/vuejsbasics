<template>
  <div class="home">
    <HelloWorld msg="view" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/home/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //calling the components
    HelloWorld,
  },
};
</script>
