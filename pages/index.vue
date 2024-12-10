<template>
  <div>
    <Navbar />
    <h1>Dernière Température</h1>
    <p v-if="pending">Chargement des données...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>
      Dernière température : <strong>{{ data[0]?.temperature }}°C</strong>
      <br />
      Humidité : <strong>{{ data[0]?.humidity }}%</strong>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchData } from '~/src/services/apiService';  // Import du service
import Navbar from '~/components/Navbar.vue';  // Import de la Navbar

const data = ref(null);
const pending = ref(true);
const error = ref(null);

const loadData = async () => {
  try {
    const cachedData = localStorage.getItem('temperature_data');
    if (cachedData) {
      data.value = JSON.parse(cachedData);  // Utilisation du cache local si disponible
      pending.value = false;
    } else {
      data.value = await fetchData();  // Récupération des données via l'API
      localStorage.setItem('temperature_data', JSON.stringify(data.value));  // Mise en cache
      pending.value = false;
    }
  } catch (err) {
    error.value = err.message;
    pending.value = false;
  }
};

onMounted(() => {
  loadData();  // Charger les données dès que le composant est monté
});
</script>
