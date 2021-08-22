const sequence = {
  _id: 1,
  get id() { return this._id++ }
}

const pokemons = [
/*   {
    nome: 'Picachu',
    tipo: 'Eletrico',
    resistencia: 'Agua',
    fraqueza: 'Fogo',
    hp: 40,
    id: 1
  },
  {
    nome: 'Charmander',
    tipo: 'Fogo',
    fraqueza: 'Agua',
    resistencia: 'Eletrico',
    hp: 100,
    id: 2
  } */
]

function salvarPokemons(pokemon) {
  if(!pokemon.id) pokemon.id = sequence.id
  pokemons[pokemon.id] = pokemon
  return pokemon
}

function mostrarPokemon(id) {
  return pokemons[id] || {}
}

function mostrarPokemons() {
  return Object.values(pokemons)
}

function atualizarPokemon(id, pokemon) {
  pokemons[id] = pokemon
  return pokemon
}

function deletaPokemons(id) { 
  sequence._id = sequence._id - 1
  const pokemonDeletado = pokemons[id]
  console.log(pokemons);
  pokemons.splice(id, 1)
  pokemons.forEach(pokemon => {
    if(pokemon.id > id) pokemon.id = pokemon.id - 1
  })
  return pokemonDeletado
}

function batalhaPokemon(id_1, id_2) {
  
  const superEfetivo = 40;
  const efetivo = 20;
  const naoEfetivo = 10;

  const pokemon1 = pokemons[id_1];
  const pokemon2 = pokemons[id_2];

  if (pokemon1.hp != 0 && pokemon2 !=0) {
    if (pokemon1.tipo == pokemon2.fraqueza) {
      pokemon2.hp = pokemon2.hp - superEfetivo
    } else if (pokemon1.tipo == pokemon2.resistencia) {
      pokemon2.hp = pokemon2.hp - naoEfetivo
    } else {
      pokemon2.hp = pokemon2.hp - efetivo
    }
  }

  if (pokemon2.hp != 0 && pokemon1 !=0) {
    if (pokemon2.tipo == pokemon1.fraqueza) {
      pokemon1.hp = pokemon1.hp - superEfetivo
    } else if (pokemon2.tipo == pokemon1.resistencia) {
      pokemon1.hp = pokemon1.hp - naoEfetivo
    } else {
      pokemon1.hp = pokemon1.hp - efetivo
    }
  }

  if (pokemon1.hp < 0) pokemon1.hp = 0
  if (pokemon2.hp < 0) pokemon2.hp = 0

  return `${pokemon1.nome}: ${pokemon1.hp} VS ${pokemon2.nome}: ${pokemon2.hp}`
}

function curaPokemon(e) {
  const id = parseInt(e)
  pokemons.forEach( pokemon => {
    if (pokemon.id === id) {
      if (pokemon.hp + 20 >= 100) {
        return pokemon.hp = 100
      }
      else if (pokemon.hp + 20 < 100) {
        return pokemon.hp = pokemon.hp + 20
      }
    }
  })

  return pokemons;
}
console.log(curaPokemon('1'))
module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletaPokemons, batalhaPokemon, curaPokemon }