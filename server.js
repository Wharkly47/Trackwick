const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Permettre l'analyse du corps des requêtes en JSON
app.use(bodyParser.json());

// Endpoint pour enregistrer le clic
app.post('/enregistrer-clic', (req, res) => {
  // Les données envoyées sont accessibles dans req.body
  console.log('Clic enregistré : ', req.body.action);
  // Vous pouvez stocker les données dans une base de données, un fichier, etc.
  // Répondre avec un statut 200 pour indiquer que tout s'est bien passé
  res.sendStatus(200);
});

// Serveur écoutant sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});

