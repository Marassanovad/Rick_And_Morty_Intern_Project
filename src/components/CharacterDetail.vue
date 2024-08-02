<template>
  <div class="content detail_content" v-if="character">
    <h1 class="title">{{ character.name }}</h1>
    <img :src="character.image" :alt="character.name" />
    <div class="details">
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
      <p>Gender: {{ character.gender }}</p>
      <p>Origin: {{ character.origin.name }}</p>
      <p>Location: {{ character.location.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      character: null,
    };
  },
  created() {
    axios
      .get(`https://rickandmortyapi.com/api/character/${this.id}`)
      .then((response) => {
        this.character = response.data;
      });
  },
};
</script>
