<template>
  <div>
    <Displaytheholding />
    <Displayrates />
  </div>
</template>

<script>
import Displaytheholding from "../components/currency/holding";
import Displayrates from "../components/currency/rates";

export default {
  name: "mytrading",
  components: {
    Displaytheholding,
    Displayrates,
    //calling the components
  },
};
</script>
