<template>
  <div>
    <HelloWorld msg="prop msg" />
  </div>
</template>

<script>
import HelloWorld from "../components/home/HelloWorld.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
};
</script>
