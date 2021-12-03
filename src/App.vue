<template>
  <v-app>
    <v-main>
      <div id="nav" style="width: 40%; margin-left: auto; margin-right: auto">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/databinding">databinding</router-link> |
        <router-link to="/Vueexperiements">Vueexperiements </router-link> |
        <router-link to="/Vuexmodule">module </router-link> |
        <router-link to="/form">form </router-link>

        <br />
        <router-link to="/mytrading">Trading </router-link> | <br />
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
