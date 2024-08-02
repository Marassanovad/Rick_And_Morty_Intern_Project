<template>
  <header>
    <nav>
      <router-link to="/characters">Characters</router-link>
      <router-link to="/episodes">Episodes</router-link>
      <router-link to="/locations">Locations</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>
