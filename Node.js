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

{
  "name": "nom-de-votre-projet",
  "version": "1.0.0",
  "description": "Description de votre projet",
  "main": "app.js",
  "dependencies": {
    "express": "^4.17.1",
    "body-parser": "^1.19.0" // Ajout de body-parser pour analyser le corps des requêtes
  },
  "scripts": {
    "start": "node app.js"
  },
  "author": "Wharkly47",
  "license": "Licence souhaitée (par exemple MIT)"
}
