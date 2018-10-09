<template>
    <div id="Maps" class="maps-wrapper">
        <img src="https://www.placecage.com/400/400" alt="cage placeholder">
    </div>
</template>

<style lang="css" scoped>
.maps-wrapper {
  align-items: center;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  order: 2;
  width: 75%;
}
</style>


<script>
import { EventBus } from '../event-bus';

export default {
  name: "Maps",
  mounted() {
    EventBus.$on('storeSelected', store => {
      console.log(store);
    });
  }
};
</script>
