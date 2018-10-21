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
import { EventBus } from "@/event-bus";
import MarkerIcon from "@/assets/marker.png";
import { mapState } from "vuex";

export default {
  name: "Maps",
  data() {
    return {
      map: null,
      markers: [],
      mapElement: null,
      mapOptions: {
        zoom: 11
      }
    };
  },
  computed: {
    ...mapState(["stores"])
  },
  methods: {
    deleteMarkers() {
      this.markers.forEach(marker => marker.setMap(null));
      this.markers = [];
    },
    createMarkerPopup(marker) {
      const infowindow = new google.maps.InfoWindow();
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent("hello world");
          infowindow.open(map, marker);
        }
      })(marker, i));
    },
    createMarker(store) {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(store.spatialData.latitude, store.spatialData.longitude),
        map: this.map,
        icon: {
          url: MarkerIcon,
          scaledSize: new google.maps.Size(40, 58)
        }
      });
      this.createMarkerPopup(marker);
      this.markers.push(marker);
    },
    setStoresMarkers() {
      this.stores.forEach(store => {
        this.createMarker(store);
      });
    },
    initMap() {
      this.map = new google.maps.Map(this.mapElement, this.mapOptions);
    }
  },
  watch: {
    stores() {
      this.setStoresMarkers();
    }
  },
  mounted() {
    this.mapElement = document.getElementById("Maps");
    this.initMap();
    EventBus.$on("storeSelected", store => {
      this.deleteMarkers();
      this.updateMap(store.spatialData.latitude, store.spatialData.longitude);
    });

    // this.bounds = new google.maps.LatLngBounds();
    // this.map.fitBounds(this.bounds.extend(position));
  }
};
</script>
