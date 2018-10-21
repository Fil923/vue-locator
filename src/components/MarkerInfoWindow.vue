<template>
    <div class="info-window">
      <div class="info-window-wrapper">
        <h2>{{store.storeName}}</h2>
        <span><b>Indirizzo</b>: {{ address }}</span>
        <span><b>Telefono</b>: {{ telephone }}</span>
        <span><b>Orari di Oggi</b>: {{printDay}}</span>
        <span><b>apertura</b>: {{ openingHour}}, <b>chiusura</b>: {{ closingHour }} </span>
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
    getDay() {
      let day = new Date();
      return day.getDay();
    },
    printDay() {
      let day = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
      return day[this.getDay];
    },
    address() {
      return this.store.address.line1;
    },
    telephone() {
      return this.store.contacts[0].value;
    },
    openingHour() {
      return this.store.openingTimes[this.getDay].slots[0].openTime;
    },
    closingHour() {
      return this.store.openingTimes[this.getDay].slots[0].closeTime;
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
