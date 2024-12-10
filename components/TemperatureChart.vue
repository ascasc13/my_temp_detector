<template>
  <div>
    <h2>Graphique des Températures</h2>
    <LineChart :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Line } from 'vue-chartjs';  // On importe le graphique Line de vue-chartjs
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

// Enregistrer les composants de Chart.js nécessaires
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const chartData = ref({
  labels: ['10 Déc', '11 Déc', '12 Déc'],  // Dates ou autres étiquettes de ton graphique
  datasets: [
    {
      label: 'Température (°C)',
      data: [22, 23, 21],  // Données de température
      borderColor: 'rgb(75, 192, 192)',
      fill: false,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Température au fil du temps',
    },
  },
});
</script>

<style scoped>
/* Style personnalisé pour ton graphique */
</style>
