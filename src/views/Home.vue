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
}

.sidebar-wrapper {
  order: 1;
  width: 25%;
  border: 1px solid orange;
}

.maps-wrapper {
  order: 2;
  width: 75%;
  border: 1px solid green;
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
