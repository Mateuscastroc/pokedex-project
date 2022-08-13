// ------- Variaveis----------
let pokemonName = document.querySelector('.pokemon_name');
let pokemonNumber = document.querySelector('.pokemon_number');
let pokemonFormRequest = document.getElementById('input-values');
let pokemonSprite = document.getElementById('pokemon-sprite');

async function fetchData(information) {
  let info = await fetch(`https://pokeapi.co/api/v2/pokemon/${information}`);
  let infoPoke = await info.json();
  let pokemon = {};
  pokemon.nome = infoPoke['name'];
  pokemon.numero = infoPoke['id'];
  pokemon.sprite =
    infoPoke['sprites']['versions']['generation-v']['black-white']['animated'][
      'front_default'
    ];
  console.log('Pokemon', pokemon);
  pokemonName.innerHTML = pokemon.nome;
  pokemonNumber.innerHTML = pokemon.numero;
  pokemonSprite.src = pokemon.sprite;
}

console.log('input', pokemonFormRequest.values);
fetchData('429');
