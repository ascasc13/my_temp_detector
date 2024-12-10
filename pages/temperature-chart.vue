<template>
  <div>
    <Navbar />
    <h1>Graphique des Températures</h1>
    <TemperatureChart :data="data" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchData } from '~/src/services/apiService';  // Import du service
import Navbar from '~/components/Navbar.vue';  // Import de la Navbar
import TemperatureChart from '~/components/TemperatureChart.vue';  // Import du graphique

const data = ref(null);

const loadData = async () => {
  try {
    data.value = await fetchData();  // Récupérer les données de l'API
  } catch (err) {
    console.error('Erreur lors de la récupération des données :', err);
  }
};

onMounted(() => {
  loadData();  // Charger les données lors du montage du composant
});
</script>
