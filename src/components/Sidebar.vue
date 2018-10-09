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
  border: 1px solid orange;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.store-list {
  width: 100%;
  overflow-y: scroll;
  height: calc(100% - 60px);
}
</style>

<script>
import StoresList from "@/components/StoresList";

export default {
  name: "Sidebar",
  components: { StoresList }
};
</script>
