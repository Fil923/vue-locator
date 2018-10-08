<template>
  <div id="app">
    <h1>Welcome to Vue Locator</h1>
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  list-style-type: none;
}
</style>

<script>
import "normalize.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
