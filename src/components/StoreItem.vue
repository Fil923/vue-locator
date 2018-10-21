<template>
    <li class="store" @click="selectStore">
        {{ store.storeName }}
    </li>
</template>

<script>
import { EventBus } from "@/event-bus";

export default {
  name: "Store",
  props: {
    store: {
      required: true
    },
    idx: {
      required: true
    }
  },
  methods: {
    selectStore() {
      EventBus.$emit("storeSelected", {store: this.store, idx: this.idx });
    }
  }
};
</script>

<style lang="scss" scoped>
.store {
  cursor: pointer;
  padding: 10px 0;
  border-top: 1px solid #2c3e50;
  border-bottom: 1px solid #2c3e50;

  &:first-child {
    border-top: 2px solid #2c3e50;
  }
}

.store:hover {
  background-color: rgba(#f2f2f2, 0.5);
}
</style>
