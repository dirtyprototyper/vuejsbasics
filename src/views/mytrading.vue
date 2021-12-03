<template>
  <div>
    <Displaytheholding />
    <Displayrates />
  </div>
</template>

<script>
import Displaytheholding from "../components/mytrading/holding";
import Displayrates from "../components/mytrading/rates";

export default {
  name: "mytrading",
  components: {
    Displaytheholding,
    Displayrates,
    //calling the components
  },
};
</script>
