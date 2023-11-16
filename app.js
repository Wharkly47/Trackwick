const express = require('express');
const app = express();
const port = 3000;

// Endpoint pour enregistrer le clic
app.post('/enregistrer-clic', (req, res) => {
  // Logique pour enregistrer les données du clic
  console.log('Clic enregistré !');
  res.send('Clic enregistré avec succès !');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est démarré sur le port ${port}`);
});