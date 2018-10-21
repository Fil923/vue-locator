<template>
    <div class="info-window">
      <div class="info-window-wrapper">
        <h2>{{store.storeName}}</h2>
        <span><b>Indirizzo</b>: {{ address }}</span>
        <span><b>Telefono</b>: {{ telephone }}</span>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      stores: []
    };
  },
  computed: {
    address() {
      return this.store.address.line1;
    },
    telephone() {
      return this.store.contacts[0].value;
    }
  }
};
</script>

<style lang="scss" scoped>
.info-window-wrapper {
  text-align: left;
  font-size: 0.9rem;
  max-width: 300px;

  span {
    display: block;
    padding-bottom: 10px;
  }
}
</style>
