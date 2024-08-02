<template>
  <div class="content location-detail" v-if="location">
    <h1 class="location-title">{{ location.name }}</h1>
    <p class="location-type">Type: {{ location.type }}</p>
    <p class="location-dimension">Dimension: {{ location.dimension }}</p>

    <div class="residents">
      <h2>Residents:</h2>
      <div class="resident-list">
        <div
          v-for="resident in residents"
          :key="resident.id"
          class="resident-item"
        >
          <img :src="resident.image" :alt="resident.name" />
          <p>{{ resident.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      location: null,
      residents: [],
    };
  },
  created() {
    axios
      .get(`https://rickandmortyapi.com/api/location/${this.id}`)
      .then((response) => {
        this.location = response.data;
        // Загрузка данных о резидентах
        const residentRequests = this.location.residents.map((url) =>
          axios.get(url)
        );
        Promise.all(residentRequests).then((responses) => {
          this.residents = responses.map((response) => response.data);
        });
      })
      .catch((error) => {
        console.error("Error loading location or residents:", error);
      });
  },
};
</script>
