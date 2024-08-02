<template>
  <div class="content">
    <h1 class="title">Rick and Morty Episodes</h1>
    <div class="list">
      <div
        class="card short-card"
        v-for="episode in episodes"
        :key="episode.id"
      >
        <router-link :to="'/episodes/' + episode.id">
          <h2>{{ episode.name }}</h2>
          <p>Air Date: {{ episode.air_date }}</p>
          <p>Episode: {{ episode.episode }}</p>
        </router-link>
      </div>
    </div>
    <div class="pagination">
      <button
        @click="fetchEpisodes(previousPageUrl)"
        :disabled="!previousPageUrl"
      >
        Previous
      </button>
      <button @click="fetchEpisodes(nextPageUrl)" :disabled="!nextPageUrl">
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
      episodes: [],
      nextPageUrl: null,
      previousPageUrl: null,
    };
  },
  created() {
    this.fetchEpisodes("https://rickandmortyapi.com/api/episode");
  },
  methods: {
    fetchEpisodes(url) {
      axios
        .get(url)
        .then((response) => {
          this.episodes = response.data.results;
          this.nextPageUrl = response.data.info.next;
          this.previousPageUrl = response.data.info.prev;
        })
        .catch((error) => {
          console.error("Error fetching episodes:", error);
        });
    },
  },
};
</script>
