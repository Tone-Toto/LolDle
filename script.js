//definition de certaines variables:
let championADeviner = null;
let championEntre = null
let pointsCommuns = null
let champions = []
// Charger le fichier JSON
fetch('./data/champions.json')
    .then(response => response.json())  // Convertir la réponse en JSON
    //Claude nous a dit de remplacer .then champions par then data, puis de
    //dire ensuite que data = champions
    .then(data => {
        champions = data;
        // Récupérer l'élément HTML où on va afficher les noms
        const championsList = document.getElementById('champions-list');

        // Sélectionner un champion aléatoirement
        const randomIndex = Math.floor(Math.random() * champions.length);
        championADeviner = champions[randomIndex];

        // Pour vérifier que ça marche (à retirer plus tard)
        console.log('Champion à deviner:', championADeviner.name[0]);

        // Plus ta  rd, on ajoutera ici le système de devinettes
        creerBlocs()
    })
    .catch(error => {
        console.error('Erreur lors du chargement:', error);
    });
//Ce qui suit, c'est claude
function getVal() {
    var nomEntre = document.getElementById("maBarre").value;
    championEntre = champions.find(c => c.name[0].toLowerCase() === nomEntre.toLowerCase());
    if (championEntre) {
        comparer();
    } else {
        alert("Champion introuvable !");
    }
}
//ancien code:
//    function getVal() {
//    var championEntre = document.getElementById("maBarre").value;
//    console.log(championEntre);
//}

//fonction qui va comparer les caracteristiques du champion entré vs champion à deviner
// puis qui va retourner vert, orange, rouge en fonction des points communs de ces deux champions


//function creerBlocs() {
   //console.log(championADeviner);
    //for (const q in championADeviner) {
        //let bloc = document.createElement('div');
        //bloc.innerText = championADeviner[q];
        //bloc.style.width = '100px';
        //bloc.style.height = '100px';
        //bloc.style.border = '1px solid black';
        //bloc.style.display = 'inline-block';
        //bloc.style.margin = '5px';
        //bloc.style.backgroundColor = 'red'; // Couleur de fond rouge par défaut
        //document.getElementById('container').appendChild(bloc);
    //}
//}
function comparer() {
    for (const q in championADeviner) {

        let pointsCommuns = 0;

        //le const,etc. c'est chatgpt
        for (const valeur of championADeviner[q]) {
            if (championEntre[q].includes(valeur)) {
                pointsCommuns++;
            }
        }

        if (pointsCommuns === championADeviner[q].length && championEntre[q].length === championADeviner[q].length) {
            let bloc = document.createElement('div');
            bloc.innerText = championEntre[q];
            bloc.style.width = '100px';
            bloc.style.height = '100px';
            bloc.style.border = '1px solid black';
            bloc.style.display = 'inline-block';
            bloc.style.margin = '5px';
            bloc.style.backgroundColor = 'green'; // Couleur de fond rouge par défaut
            document.getElementById('container').appendChild(bloc);
        }
        else if (pointsCommuns > 0 && pointsCommuns < championADeviner[q].length) {
            let bloc = document.createElement('div');
            bloc.innerText = championEntre[q];
            bloc.style.width = '100px';
            bloc.style.height = '100px';
            bloc.style.border = '1px solid black';
            bloc.style.display = 'inline-block';
            bloc.style.margin = '5px';
            bloc.style.backgroundColor = 'orange'; // Couleur de fond rouge par défaut
            document.getElementById('container').appendChild(bloc);
        }
        else {
            let bloc = document.createElement('div');
            bloc.innerText = championEntre[q];
            bloc.style.width = '100px';
            bloc.style.height = '100px';
            bloc.style.border = '1px solid black';
            bloc.style.display = 'inline-block';
            bloc.style.margin = '5px';
            bloc.style.backgroundColor = 'red'; // Couleur de fond rouge par défaut
            document.getElementById('container').appendChild(bloc);
        }
    }
}




function creerBlocs() {
    console.log(championADeviner);
    let questions = Object.keys(championADeviner);
    for (const q in questions) {
        let bloc = document.createElement('div');
        bloc.innerText = questions[q];
        bloc.style.width = '100px';
        bloc.style.height = '100px';
        bloc.style.display = 'inline-block';
        bloc.style.margin = '5px';
        bloc.style.backgroundColor = 'white'; // Couleur de fond rouge par défaut
        document.getElementById('container').appendChild(bloc);
    }
}


//utiliser championEntre = prompt("Entrez votre Champion")

//plus tard, rajouter: losque champion est entré: lancer fonction