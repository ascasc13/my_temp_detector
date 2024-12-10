// src/services/apiService.js

const API_URL = 'http://localhost:5000/data';

export async function fetchData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erreur de récupération des données');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}
