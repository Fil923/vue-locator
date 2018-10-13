<template>
  <section class="home">
    <Sidebar />
    <Maps />
  </section>
</template>

<style lang="css">
.home {
  display: flex;
  justify-content: center;
  margin: 0 10px;
  padding: 0 10px;
  max-height: 800px;
}

@media only screen and (max-width: 600px) {
  .home {
    flex-wrap: wrap;
  }
}
</style>


<script>
// @ is an alias to /src
import Maps from "@/components/Maps";
import Sidebar from "@/components/Sidebar";
export default {
  name: "home",
  components: {
    Maps,
    Sidebar
  }
};
</script>
