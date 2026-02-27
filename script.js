//Ok maintenant c'est pas mal et le jeu marche.
//A ameliorer:
// 1. Meilleure barre de recherche: qui trie progressivement et enter marche
// 2. Lignes de champions qui se mettent vers le bas au fur et à mesure:
// (1= 1er champ entré) maintenant: 123456  on veut: 654321
// 3. Ajouter des effets lorsque l'on gagne/lorsque les cubes apparaissent,...)
// 3. Idee finale si on a le temps, ajouter un timer, faire ça type speedrun, 
// avec une moyenne de temps, et d’essais sur 5 parties, + pénalisation de temps
// pour chaque essai (pas pour le premier)
// 4. Important: C pas la priorité, je pense qu'on peut faire sans.
// ça marche juste vrmt pas pour Aatrox mais la plupart des autres c chill
// peut-être demander au prof mais ne pas se casser le crâne sur cee qui suit:
// Faire que charactéristiques champions entrent exactement dans boîtes:
// Ex. Si characteristique_champ.text_length{<-on veut la longueur en px du texte}
// + ce qu'il y avait deja sur 
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

        // Plus tard, on ajoutera ici le système de devinettes
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

        if (pointsCommuns == championADeviner[q].length && championEntre[q].length == championADeviner[q].length) {
            let bloc = document.createElement('div');
            bloc.innerText = championEntre[q];
            bloc.style.width = '100px';
            bloc.style.height = '100px';
            bloc.style.border = '1px solid black';
            bloc.style.margin = '5px';
            bloc.style.backgroundColor = 'green';
            //Rajouter du code pour pas que le texte ne déborde sur les côtés
            //Claude Pour aligner non seulement horizontalement comme avant mais
            // aussi verticalement et ceci est facile avec flex
            bloc.style.verticalAlign = "middle";
            bloc.style.display = "inline-flex";
            bloc.style.justifyContent = "center";
            bloc.style.alignItems = "center";
            //Fin de Claude
            document.getElementById('container').appendChild(bloc);
        }
        else if (pointsCommuns > 0) {
            let bloc = document.createElement('div');
            bloc.innerText = championEntre[q];
            bloc.style.width = '100px';
            bloc.style.height = '100px';
            bloc.style.border = '1px solid black';
            bloc.style.margin = '5px';
            bloc.style.backgroundColor = 'orange';
            //Rajouter du code pour pas que le texte ne déborde sur les côtés
            //Claude Pour aligner non seulement horizontalement comme avant mais
            // aussi verticalement et ceci est facile avec flex
            bloc.style.verticalAlign = "middle";
            bloc.style.display = "inline-flex";
            bloc.style.justifyContent = "center";
            bloc.style.alignItems = "center";
            //Fin de Claude
            document.getElementById('container').appendChild(bloc);
        }
        else {
            let bloc = document.createElement('div');
            bloc.innerText = championEntre[q];
            bloc.style.width = '100px';
            bloc.style.height = '100px';
            bloc.style.border = '1px solid black';
            bloc.style.margin = '5px';
            bloc.style.backgroundColor = 'red';
            //Rajouter du code pour pas que le texte ne déborde pas sur les côtés
            // (par exemple Aatrox)
            //Claude Pour aligner non seulement horizontalement comme avant mais
            // aussi verticalement et ceci est facile avec flex
            bloc.style.verticalAlign = "middle";
            bloc.style.display = "inline-flex";
            bloc.style.justifyContent = "center";
            bloc.style.alignItems = "center";
            //Fin de Claude
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
            bloc.style.border = '1px solid black';
            bloc.style.margin = '5px';
            bloc.style.backgroundColor = 'Azure';
            bloc.style.verticalAlign = "middle";
            bloc.style.display = "inline-flex";
            bloc.style.justifyContent = "center";
            bloc.style.alignItems = "center";
            document.getElementById('container').appendChild(bloc);
    }
}


//utiliser championEntre = prompt("Entrez votre Champion")

//plus tard, rajouter: losque champion est entré: lancer fonction