<template>
  <div>
    <h1>Characters</h1>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <h2>{{ character.name }}</h2>
        <p>Status: {{ character.status }}</p>
        <p>Species: {{ character.species }}</p>
        <p>Gender: {{ character.gender }}</p>
        <p>Origin: {{ character.origin.name }}</p>
        <img :src="character.image" :alt="character.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CharacterList",
  data() {
    return {
      characters: [],
    };
  },
  created() {
    this.loadMockCharacters();
  },
  methods: {
    loadMockCharacters() {
      this.characters = [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          gender: "Male",
          origin: { name: "Earth (C-137)" },
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
          id: 2,
          name: "Morty Smith",
          status: "Alive",
          species: "Human",
          gender: "Male",
          origin: { name: "Earth (C-137)" },
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
          id: 3,
          name: "Summer Smith",
          status: "Alive",
          species: "Human",
          gender: "Female",
          origin: { name: "Earth (Replacement Dimension)" },
          image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
          id: 4,
          name: "Beth Smith",
          status: "Alive",
          species: "Human",
          gender: "Female",
          origin: { name: "Earth (Replacement Dimension)" },
          image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
          id: 5,
          name: "Jerry Smith",
          status: "Alive",
          species: "Human",
          gender: "Male",
          origin: { name: "Earth (Replacement Dimension)" },
          image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        // Добавьте больше фиктивных данных по мере необходимости
      ];
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

img {
  margin-left: 20px;
  border-radius: 50%;
}
</style>

<style>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
