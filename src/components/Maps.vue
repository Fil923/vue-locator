<template>
    <div id="Maps" class="maps-wrapper">
    </div>
</template>

<style lang="css" scoped>
.maps-wrapper {
  background: gray;
  border: 1px solid green;
  display: flex;
  height: auto;
  justify-content: center;
  margin: 0 auto;
  order: 2;
  width: 70%;
}
</style>

<script>
import { EventBus } from '../event-bus';
export default {
  name: "Maps",
  props: ['name'],
  data: function () {
    return {
      mapName: this.name,
      markerCoordinates: [{
        latitude: 44.50740353,
        longitude: 11.34669353
      }],
      map: null,
      bounds: null,
      markers: []
    }
  },
  mounted() {
    EventBus.$on('storeSelected', store => {
      console.log(store);
    });
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById("Maps")
    const mapCentre = this.markerCoordinates;
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({ 
        position,
        map: this.map
      });
    this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position));
    });
  }
};
</script>
