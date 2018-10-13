<template>
    <li class="store" @click="selectStore">
        {{ store.storeName }}
    </li>
</template>

<script>
import { EventBus } from '@/event-bus';

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
      EventBus.$emit("storeSelected", this.store);
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
