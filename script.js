let championsData = [];

// Charger les données au démarrage
async function loadChampions() {
    try {
        // REMPLACE CETTE URL par l'URL de ton fichier champions.json
        const response = await fetch('./data/champions.json');
        championsData = await response.json();
       
        // Cacher le loading
        document.getElementById('loading').classList.add('hidden');
       
        // Afficher le nombre de champions
        const countElement = document.getElementById('champCount');
        countElement.textContent = `${championsData.length} champions chargés`;
        countElement.classList.remove('hidden');
       
        console.log('Champions chargés:', championsData.length);
    } catch (error) {
        console.error('Erreur de chargement:', error);
        document.getElementById('loading').textContent = 'Erreur de chargement !';
    }
}

// Fonction pour choisir un champion aléatoire
function pickRandomChampion() {
    if (championsData.length === 0) {
        alert('Les champions ne sont pas encore chargés !');
        return;
    }
   
    // Choisir un index aléatoire
    const randomIndex = Math.floor(Math.random() * championsData.length);
    const champion = championsData[randomIndex];
   
    // Afficher les informations
    document.getElementById('championName').textContent = champion.name[0];
    document.getElementById('gender').textContent = champion.gender[0];
    document.getElementById('position').textContent = champion.positions.join(', ');
    document.getElementById('species').textContent = champion.species.join(', ');
    document.getElementById('range').textContent = champion.range_type[0];
    document.getElementById('region').textContent = champion.regions[0];
   
    // Afficher le résultat
    document.getElementById('result').classList.remove('hidden');
}

// Charger les champions au démarrage de la page
loadChampions();
