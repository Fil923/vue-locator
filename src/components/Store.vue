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
  margin: 5px 0;
  padding: 3px 0;
  border-bottom: 1px solid #2c3e50;
}

.store:hover {
  background-color: rgba(#f2f2f2, 0.5);
}
</style>
