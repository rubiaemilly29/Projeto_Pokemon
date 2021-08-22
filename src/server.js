const express = require('express');
const app = express()
const data = require('./data')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/pokemons',(req,res) => {
  res.send(data.mostrarPokemons())
})

app.get('/pokemons/:id',(req,res) => {
  res.send(data.mostrarPokemon(req.params.id))
})

app.post('/pokemons',(req,res) => {
  const pokemon = data.salvarPokemons({
    nome:req.body.nome,
    tipo: req.body.tipo,
    fraqueza: req.body.fraqueza,
    resistencia: req.body.resistencia,
    hp: 100
  })
  res.send(pokemon)
})

app.put('/pokemons/:id', (req, res) => {
  const pokemon = data.atualizarPokemon(req.params.id, {
    nome: req.body.nome,
    tipo: req.body.tipo,
    fraqueza: req.body.fraqueza,
    resistencia: req.body.resistencia,
    hp: 100,
    id: parseInt(req.params.id)
  })
  res.send(pokemon)
})

app.delete('/pokemons/:id', (req, res) => {
  res.send(data.deletaPokemons(req.params.id))
})

app.post('/batalha',(req,res) => {
  res.send(data.batalhaPokemon(req.body.id_1, req.body.id_2 ))
})

app.get('/curaPokemon/:id', (req, res) => {
  res.send(data.curaPokemon(req.params.id))
})

app.listen('3003')