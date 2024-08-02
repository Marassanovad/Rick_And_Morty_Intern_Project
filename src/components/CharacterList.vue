<template>
  <div class="content">
    <h1 class="title">Rick and Morty Characters</h1>
    <div class="list">
      <div class="card" v-for="character in characters" :key="character.id">
        <router-link :to="'/characters/' + character.id">
          <img :src="character.image" :alt="character.name" />
          <h2>{{ character.name }}</h2>
          <p>Status: {{ character.status }}</p>
          <p>Species: {{ character.species }}</p>
        </router-link>
      </div>
    </div>
    <div class="pagination">
      <button
        @click="fetchCharacters(previousPageUrl)"
        :disabled="!previousPageUrl"
      >
        Previous
      </button>
      <button @click="fetchCharacters(nextPageUrl)" :disabled="!nextPageUrl">
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
      characters: [],
      nextPageUrl: null,
      previousPageUrl: null,
    };
  },
  created() {
    this.fetchCharacters("https://rickandmortyapi.com/api/character");
  },
  methods: {
    fetchCharacters(url) {
      axios
        .get(url)
        .then((response) => {
          this.characters = response.data.results;
          this.nextPageUrl = response.data.info.next;
          this.previousPageUrl = response.data.info.prev;
        })
        .catch((error) => {
          console.error("Error fetching characters:", error);
        });
    },
  },
};
</script>
