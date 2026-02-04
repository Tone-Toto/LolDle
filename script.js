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
<<<<<<< HEAD
=======

//fonction qui va comparer les caracteristiques du champion entré vs champion à deviner
// puis qui va retourner vert, orange, rouge en fonction des points communs de ces deux champions
function comparer(){
    for(q in championADeviner){
        for (i in championADeviner[q]){
            if (championEntre[q][i] == championADeviner[q][i]){
                pointsCommuns ++;
            }
        }
        if (pointsCommuns == championADeviner[q].length){
            //mettre la couleur du background de la case en vert
        }
        else if (0 < pointsCommuns && pointsCommuns < championADeviner[q].length){
            //mettre la couleur du background de la case en orange
        }
        else {
            //mettre la couleur du background de la case en rouge
        }
}
}

//utiliser championEntre = prompt("Entrez votre Champion")
>>>>>>> parent of 196a5c2 (version corrigée de chatgpt d'un bug)
