<template>
  <div class="content episode-detail" v-if="episode">
    <h1 class="episode-title">{{ episode.name }}</h1>
    <p class="release-date">Release Date: {{ episode.air_date }}</p>
    <p class="episode-info">Episode: {{ episode.episode }}</p>

    <div class="characters">
      <h2>Characters:</h2>
      <div class="character-list">
        <div
          v-for="character in characters"
          :key="character.id"
          class="character-item"
        >
          <img :src="character.image" :alt="character.name" />
          <p class="title">{{ character.name }}</p>
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
      episode: null,
      characters: [], // Здесь хранятся данные о персонажах
    };
  },
  created() {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${this.id}`)
      .then((response) => {
        this.episode = response.data;
        // Загрузка данных о персонажах
        const characterRequests = this.episode.characters.map((url) =>
          axios.get(url)
        );
        Promise.all(characterRequests).then((responses) => {
          this.characters = responses.map((response) => response.data);
        });
      })
      .catch((error) => {
        console.error("Error loading episode or characters:", error);
      });
  },
};
</script>
