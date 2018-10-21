<template>
    <div id="Maps" class="maps-wrapper">
    </div>
</template>

<style lang="css" scoped>
.maps-wrapper {
  background: gray;
  border: 1px solid green;
  height: auto;
  margin: 0 auto;
  order: 2;
  width: 70%;
}

@media only screen and (max-width: 600px) {
  .maps-wrapper {
    height: 200px;
    width: 100%;
  }
}
</style>

<script>
import { EventBus } from "../event-bus";
export default {
  name: "Maps",
  data: function() {
    return {
      mapName: this.name,
      markerCoordinates: [ 
        {
          latitude: 44.50740353,
          longitude: 11.34669353
        }
      ],
      map: null,
      bounds: null,
      markers: []
    };
  },
  computed: {
    allStores() {
      return this.$store.getters.stores
    }
  },
  mounted() {
    // Init
    const element = document.getElementById("Maps");
    this.bounds = new google.maps.LatLngBounds();
    const mapCentre = this.markerCoordinates;
    // Options for generate the map
    let options = {
      zoom: 4,
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    };
    // generation of the map
    this.map = new google.maps.Map(element, options);
    // For every marker in data we create a marker in the map
    let position = new google.maps.LatLng(
      this.markerCoordinates[0].latitude,
      this.markerCoordinates[0].longitude
    );
    let marker = new google.maps.Marker({
      position,
      map: this.map,
      icon: {
        url: require('@/assets/marker.png'),
        scaledSize: new google.maps.Size(40, 58),
      },
    });
    // Adding marker to array of markers
    this.markers.push(marker);
    // Setting bounds
    this.map.fitBounds(this.bounds.extend(position));
    let DeleteMarkers = () => {
      //Loop through all the markers and remove
      for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
      }
      this.markers = [];
    };
    let updateMap = (latitude, longitude) => {
      let position = new google.maps.LatLng(
        latitude,
        longitude
      );
      let marker = new google.maps.Marker({
        position,
        map: this.map,
        icon: {
          url: require('@/assets/marker.png'),
          scaledSize: new google.maps.Size(40, 58),
        },
      });
      // Adding marker to array of markers
      this.markers.push(marker);
      // Setting bounds
      // this.map.fitBounds(this.bounds.extend(position));
      this.map.setCenter(position);
      this.map.setZoom(11);
    }
    EventBus.$on("storeSelected", store => {
      DeleteMarkers();
      updateMap(store.spatialData.latitude, store.spatialData.longitude)
    });
  }
};
</script>
