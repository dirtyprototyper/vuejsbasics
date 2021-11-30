<template>
  <!--routing div. Remember to adjust it in index.js-->
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/signup">signup</router-link> |
    <router-link to="/VueStore">vuestore </router-link> |
    <router-link to="/Vuexmodule">module </router-link>
    <br />
    <router-link to="/mytrading">Trading </router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
