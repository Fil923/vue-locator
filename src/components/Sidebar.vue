<template>
    <div id="Sidebar" class="sidebar-wrapper">
        <h3 class="title">Store List</h3>
        <StoresList  />
    </div>
</template>

<style lang="css" scoped>
.sidebar-wrapper {
  order: 1;
  width: 30%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #2c3e50;
}

.store-list {
  width: 100%;
  overflow-y: scroll;
  height: calc(100% - 60px);
}

@media only screen and (max-width: 600px) {
  .sidebar-wrapper {
    max-height: 160px;
    width: 100%;
  }
}
</style>

<script>
import StoresList from "@/components/StoresList";

export default {
  name: "Sidebar",
  components: { StoresList }
};
</script>
