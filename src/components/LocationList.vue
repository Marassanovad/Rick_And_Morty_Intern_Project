<template>
  <div class="content">
    <h1 class="title">Rick and Morty Locations</h1>
    <div class="list">
      <div
        class="card short-card"
        v-for="location in locations"
        :key="location.id"
      >
        <router-link :to="'/locations/' + location.id">
          <h2>{{ location.name }}</h2>
          <p>Type: {{ location.type }}</p>
          <p>Dimension: {{ location.dimension }}</p>
        </router-link>
      </div>
    </div>
    <div class="pagination">
      <button
        @click="fetchLocations(previousPageUrl)"
        :disabled="!previousPageUrl"
      >
        Previous
      </button>
      <button @click="fetchLocations(nextPageUrl)" :disabled="!nextPageUrl">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      locations: [],
      nextPageUrl: null,
      previousPageUrl: null,
    };
  },
  created() {
    this.fetchLocations("https://rickandmortyapi.com/api/location");
  },
  methods: {
    fetchLocations(url) {
      axios
        .get(url)
        .then((response) => {
          this.locations = response.data.results;
          this.nextPageUrl = response.data.info.next;
          this.previousPageUrl = response.data.info.prev;
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
        });
    },
  },
};
</script>
