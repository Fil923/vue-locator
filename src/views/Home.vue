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
  min-height: 400px;
  max-height: calc(100vh - 161px);
}

@media only screen and (max-width: 600px) {
  .home {
    flex-wrap: wrap;
  }
}
</style>


<script>
import { EventBus } from "../event-bus";
import Maps from "@/components/Maps";
import Sidebar from "@/components/Sidebar";
export default {
  name: "home",
  components: {
    Maps,
    Sidebar
  },
  created() {
    this.$store.dispatch("getStores").then(() => {
      EventBus.$emit("storesAreReady");
    });
  }
};
</script>
