<template>
    <ul class="store-list">
        <template v-if="showStores">
            <Store v-for="(store, idx) in stores"
                :key="idx"
                :store="store"
            />
        </template>
        <template v-else>
            <li>No store available</li>
        </template>
    </ul>
</template>

<style lang="css" scoped>
.store-list {
  margin-bottom: 30px;
}
</style>

<script>
import Store from "@/components/Store";
import { mapState } from "vuex";

export default {
  name: "StoreList",
  components: { Store },
  computed: {
    ...mapState(["stores"]),
    showStores() {
      return this.stores && this.stores.length;
    }
  },
  created() {
    this.$store.dispatch("getStores");
  }
};
</script>

