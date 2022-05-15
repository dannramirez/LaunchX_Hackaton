<template>

  <div id="container">
    <div id="mapContainer"></div>
  </div>

</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "Map",
  data() {
    return {
      center: [37, 7749, -122, 4194]
    }
  },
  methods: {
    setupLeafletMap: function () {
      var map = L.map('mapContainer').setView([85.50, -1.52], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map); L.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  position: relative;
  margin: auto;
  top: 14rem;
  left: auto;
  right: auto;
  width: 80vw;
  height: 80vh;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>
