<template>
    <li class="store" @click="selectStore">
        {{ store.name }}
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

<style lang="scss" scoped>
.store {
  cursor: pointer;
}
</style>
