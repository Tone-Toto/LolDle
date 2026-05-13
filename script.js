//definition de certaines variables:
let championADeviner = null;
let championEntre = null
let pointsCommuns = null
let champions = []
let blocs_reussis = null
let essais = null
let essais_moyenne
vect_essais = []
let score = 0
let compteur_parties = null
let calcul_moyenne = 0
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
        championADeviner = champions[randomIndex]; // On prend le champion à deviner à l'envers pour éviter de tomber sur les premiers champions à chaque fois

        // Pour vérifier que ça marche
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


function comparer() {
    essais_reussis = 0
    for (const q of Object.keys(championADeviner).reverse()) {
//le .reverse c le poto Claude
        pointsCommuns = 0;
        //le const,etc. c'est chatgpt mais la structure pas
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
            //Claude Pour aligner non seulement horizontalement comme avant mais
            // aussi verticalement et ceci est facile avec flex
            bloc.style.verticalAlign = "middle";
            bloc.style.display = "inline-flex";
            bloc.style.justifyContent = "center";
            bloc.style.alignItems = "center";
            //Fin de Claude
            document.getElementById('container').insertAdjacentElement("afterbegin",bloc);
            essais_reussis ++
        }
        else if (pointsCommuns > 0) {
            let bloc = document.createElement('div');
            bloc.innerText = championEntre[q];
            bloc.style.width = '100px';
            bloc.style.height = '100px';
            bloc.style.border = '1px solid black';
            bloc.style.margin = '5px';
            bloc.style.backgroundColor = 'orange';
            //Claude Pour aligner non seulement horizontalement comme avant mais
            // aussi verticalement et ceci est facile avec flex
            bloc.style.verticalAlign = "middle";
            bloc.style.display = "inline-flex";
            bloc.style.justifyContent = "center";
            bloc.style.alignItems = "center";
            //Fin de Claude
            document.getElementById('container').insertAdjacentElement("afterbegin",bloc);
        }
        else {
            let bloc = document.createElement('div');
            bloc.innerText = championEntre[q];
            bloc.style.width = '100px';
            bloc.style.height = '100px';
            bloc.style.border = '1px solid black';
            bloc.style.margin = '5px';
            bloc.style.backgroundColor = 'red';
            // (par exemple Aatrox)
            //Claude Pour aligner non seulement horizontalement comme avant mais
            // aussi verticalement et ceci est facile avec flex
            bloc.style.verticalAlign = "middle";
            bloc.style.display = "inline-flex";
            bloc.style.justifyContent = "center";
            bloc.style.alignItems = "center";
            //Fin de Claude
            document.getElementById('container').insertAdjacentElement("afterbegin",bloc);
        }
    }
    if (essais_reussis < 8){
    essais ++
    }
    if (essais_reussis == 8){
        vect_essais.push(essais)

        const randomIndex = Math.floor(Math.random() * champions.length);
        championADeviner = champions[randomIndex];

        console.log('Champion à deviner:', championADeviner.name[0]);

        essais = 0
        compteur_parties++
        score++
    }

console.log('essais:', essais);
console.log('score:', score);
let message = "essais: " + essais + "&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score: " + score
document.getElementById('score').innerHTML=message

if (compteur_parties == 3){
    //l'internet
    calcul_moyenne = vect_essais.reduce((acc, val) => acc + val, 0) / vect_essais.length
    essais_moyenne = calcul_moyenne.toFixed(2)
    compteur_parties = 0
}
message = "essais: " + essais + "&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score: " + score + "&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moyenne d'essais sur 3 parties: " + essais_moyenne
console.log('essais_moyenne:', essais_moyenne);
document.getElementById('score').innerHTML=message
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
            bloc.style.backgroundColor = ' #6A1BAB';
            bloc.style.verticalAlign = "middle";
            bloc.style.display = "inline-flex";
            bloc.style.justifyContent = "center";
            bloc.style.alignItems = "center";
            document.getElementById('container2').appendChild(bloc);
    }
}

