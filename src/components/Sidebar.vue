<template>
    <div id="Sidebar" class="sidebar-wrapper">
        <p>This is the Sidebar component</p>
        <StoresList  />
    </div>
</template>

<style lang="css" scoped>
.sidebar-wrapper {
  order: 1;
  width: 25%;
  border: 1px solid orange;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.store-list {
  width: 100%;
}
</style>

<script>
import StoresList from "@/components/StoresList";

export default {
  name: "Sidebar",
  components: { StoresList }
};
</script>
