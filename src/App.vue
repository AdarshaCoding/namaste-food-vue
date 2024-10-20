<template>
  <div class="app-container">
    <AppHeader />
    <div class="container">
      <router-view />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Footer,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  /* background-color: black; */
  color: #282c3f;
  font-family: Arial, Helvetica, sans-serif;
}

.app-container {
  height: 100%;
}
.container {
  padding: 0px 50px;
}
</style>
