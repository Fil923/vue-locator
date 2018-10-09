<template>
    <li class="store" @click="selectStore">
        {{ store.storeName }}
    </li>
</template>

<script>
export default {
  name: "Store",
  props: {
    store: {
      required: true
    }
  },
  methods: {
    selectStore() {
      // We will comunicate with map component with event o store ?
      this.$emit("storeSelected", this.store);
    }
  }
};
</script>

<style lang="css" scoped>
.store {
  cursor: pointer;
  margin: 5px 0;
  padding: 3px 0;
}
</style>
