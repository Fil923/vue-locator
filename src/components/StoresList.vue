<template>
    <ul class="store-list">
        <template v-if="stores.length > 0">
            <StoreItem v-for="(store, idx) in stores"
                :key="idx"
                :store="store"
                :idx="idx"
            />
        </template>
        <template v-else>
            <li>No store available</li>
        </template>
    </ul>
</template>

<style lang="css" scoped>
</style>

<script>
import StoreItem from "@/components/StoreItem";
import { mapGetters } from "vuex";

export default {
  name: "StoreList",
  components: { StoreItem },
  computed: {
    ...mapGetters(["stores"])
  }
};
</script>
