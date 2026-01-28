// Charger le fichier JSON
fetch('champions.json')
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(champions => {
        // Récupérer l'élément HTML où on va afficher les noms
        const championsList = document.getElementById('champions-list');
        
        // Parcourir tous les champions
        champions.forEach(champion => {
            // Créer un élément pour chaque champion
            const championDiv = document.createElement('div');
            championDiv.textContent = champion.name[0];  // Afficher le nom
            
            // Ajouter l'élément à la liste
            championsList.appendChild(championDiv);
        });
    })
    .catch(error => {
        console.error('Erreur lors du chargement:', error);
    });