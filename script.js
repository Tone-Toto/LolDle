let championADeviner = null;

// Charger le fichier JSON
fetch('./data/champions.json')
    // Variable globale pour stocker le champion à deviner
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(champions => {
        // Choisir un champion aléatoire
        const indexAleatoire = Math.floor(Math.random() * champions.length);
        championADeviner = champions[indexAleatoire];
        
        // Pour vérifier que ça marche (à retirer plus tard)
        console.log('Champion à deviner:', championADeviner.name[0]);
        
        // Plus tard, on ajoutera ici le système de devinettes
    })
    .catch(error => {
        console.error('Erreur lors du chargement:', error);
    });