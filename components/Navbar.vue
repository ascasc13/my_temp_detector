<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Accueil</NuxtLink></li>
      <li><NuxtLink to="/temperature-chart">Graphique des Températures</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup>
// Pas de logique ici pour la navbar, juste du HTML de base avec des liens vers les pages.
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
