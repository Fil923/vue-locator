<template>
    <div id="Sidebar" class="sidebar-wrapper">
        <p>This is the Sidebar component</p>
        <StoresList  />
    </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import StoresList from "@/components/StoresList";

export default {
  name: "Sidebar",
  components: { StoresList }
};
</script>
