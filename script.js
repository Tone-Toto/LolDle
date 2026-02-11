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
        
        // Sélectionner un champion aléatoirement
        const randomIndex = Math.floor(Math.random() * champions.length);
        championADeviner = champions[randomIndex];
        
        // Pour vérifier que ça marche (à retirer plus tard)
        console.log('Champion à deviner:', championADeviner.name[0]);
        
        // Plus tard, on ajoutera ici le système de devinettes

    })
    .catch(error => {
        console.error('Erreur lors du chargement:', error);
    });
function getVal() {
    const championEntre = document.getElementById("maBarre").value;
    console.log(championEntre);
  }
    
//fonction qui va comparer les caracteristiques du champion entré vs champion à deviner
// puis qui va retourner vert, orange, rouge en fonction des points communs de ces deux champions
function comparer() {
    for (const q in championADeviner) {

        let pointsCommuns = 0;

        //le const,etc. c'est chatgpt
        for (const valeur of championADeviner[q]) {
            if (championEntre[q].includes(valeur)) {
                pointsCommuns++;
            }
        }

        if (pointsCommuns === championADeviner[q].length) {
            // background case vert
        }
        else if (pointsCommuns > 0 && pointsCommuns < championADeviner[q].length) {
            // background case orange
        }
        else {
            // background case rouge
        }
    }
}

//utiliser championEntre = prompt("Entrez votre Champion")
