//definition de certaines variables:
let championADeviner = null;
let championEntre = null
let pointsCommuns = null
// Charger le fichier JSON
fetch('./data/champions.json')
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(champions => {
        // Récupérer l'élément HTML où on va afficher les noms
        const championsList = document.getElementById('champions-list');
        
        // Pour vérifier que ça marche (à retirer plus tard)
        console.log('Champion à deviner:', championADeviner.name[0]);
        
        // Plus tard, on ajoutera ici le système de devinettes

    })
    .catch(error => {
        console.error('Erreur lors du chargement:', error);
    });
