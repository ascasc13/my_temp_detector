<template>
  <div>
    <Navbar />
    <h1>Dernière Température</h1>
    <p v-if="pending">Chargement des données...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>
      Dernière température : <strong>{{ data[0]?.temperature }}°C</strong>
      <br />
      Humidité : <strong>{{ data[0]?.humidite }}%</strong>
    </p>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {fetchData} from '~/src/services/apiService';  // Import du service
import Navbar from '~/components/Navbar.vue';  // Import de la Navbar

const data = ref(null);
const pending = ref(true);
const error = ref(null);

const loadData = async () => {
  try {
    const cachedData = localStorage.getItem('temperature_data');
    if (cachedData) {
      // Vérification que les données dans le cache sont à jour
      const parsedCachedData = JSON.parse(cachedData);
      const newData = await fetchData();

      // Si les données sont différentes, les mettre à jour
      if (JSON.stringify(parsedCachedData) !== JSON.stringify(newData)) {
        data.value = newData;
        localStorage.setItem('temperature_data', JSON.stringify(data.value));  // Mise à jour du cache
      } else {
        data.value = parsedCachedData;  // Utilisation du cache si les données sont identiques
      }
    } else {
      // Si aucune donnée dans le cache, récupérer depuis l'API
      data.value = await fetchData();
      localStorage.setItem('temperature_data', JSON.stringify(data.value));  // Mise en cache
    }
    pending.value = false;
  } catch (err) {
    error.value = err.message;
    pending.value = false;
  }
};

onMounted(() => {
  loadData();  // Charger les données dès que le composant est monté
});
</script>
