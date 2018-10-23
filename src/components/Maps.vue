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
import Vue from "vue";
import { EventBus } from "../event-bus";
import MarkerIcon from "@/assets/marker.png";
import InfoWindowBaseComponent from "@/components/MarkerInfoWindow.vue";

export default {
  name: "Maps",
  data() {
    return {
      mapSelector: "#Maps",
      mapEl: null,
      mapOptions: {
        zoom: 11,
        center: {
          lat: 44.50740353,
          lng: 11.34669353
        }
      },
      clusters: null,
      bounds: null,
      infoWindowBaseComponent: null
    };
  },
  computed: {
    stores() {
      return this.$store.getters.stores;
    },
    markers() {
      return this.$store.getters.markers;
    }
  },
  methods: {
    initMaps() {
      return new google.maps.Map(this.mapEl, this.mapOptions);
    },
    setStoresMarkers() {
      return this.stores.map(store => {
        const marker = new google.maps.Marker({
          position: {
            lat: store.spatialData.latitude,
            lng: store.spatialData.longitude
          },
          map: this.map,
          title: store.storeName,
          icon: {
            url: MarkerIcon,
            scaledSize: new google.maps.Size(40, 58)
          }
        });
        this.bounds.extend(marker.getPosition());
        marker.addListener("click", () => {
          this.map.setZoom(17);
          this.openMarkerInfoWindow(store, marker);
        });
        return marker;
      });
    },
    createNewInfoWindowHtml(store) {
      const baseComponent = this.infoWindowBaseComponent;
      return new baseComponent({
        propsData: { store }
      }).$mount().$el.innerHTML;
    },
    openMarkerInfoWindow(store, marker) {
      this.$store.dispatch("closeOpenedInfoModal");
      const content = this.createNewInfoWindowHtml(store);
      const infoWindow = new google.maps.InfoWindow({ content });
      this.$store.dispatch("setOpenedInfoModal", infoWindow);
      infoWindow.open(this.map, marker);
      this.map.panTo(marker.getPosition());
    },
    setClusters() {
      return new MarkerClusterer(this.map, this.markers, {
        maxZoom: 17,
        gridSize: 53,
        styles: [
          {
            textColor: "white",
            textSize: 12,
            height: 30,
            width: 30,
            url: "https://media.yoox.biz/ytos/resources/FERRARI/img/cluster_ferrari_retina.png",
            backgroundPosition: "center",
            borderRadius: "50%"
          }
        ]
      });
    },
    fitVisibleMarkers() {
      this.map.fitBounds(this.bounds);
    },
    storesAreReady() {
      const markers = this.setStoresMarkers();
      this.$store.dispatch("saveMarkers", markers);
      this.clusters = this.setClusters();
      this.fitVisibleMarkers();
    }
  },
  mounted() {
    this.mapEl = document.querySelector(this.mapSelector);
    this.map = this.initMaps();
    this.bounds = new google.maps.LatLngBounds();
    this.infoWindowBaseComponent = Vue.extend(InfoWindowBaseComponent);
  },
  created() {
    EventBus.$on("storesAreReady", this.storesAreReady);
    EventBus.$on("storeSelected", storeInfo => {
      google.maps.event.trigger(this.markers[storeInfo.idx], "click");
    });
  }
};
</script>
