const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetGames = event => {
  event.preventDefault()
  const form = (event.target)
  const formData = getFormFields(form)

  api.getGames(formData)
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onCreateGame = event => {
  event.preventDefault()
  const form = (event.target)
  const formData = getFormFields(form)
  api.createGame({game_list: formData})
    .then(() => onGetGames(event))
    .catch(ui.onCreateFailure)
}

const onDeleteGame = (event) => {
  event.preventDefault()
  const gameId = $(event.target).closest('section').data('id')
  api.deleteGame(gameId)
    .then(() => onGetGames(event))
    .catch(ui.onCreateFailure)
}

const onUpdateGame = (event) => {
  event.preventDefault()
  const gameId = $(event.target).closest('section').data('id')
  const formData = getFormFields(event.target)
  api.updateGame(gameId, formData)
    .then(() => onGetGames(event))
    .catch(ui.onCreateFailure)
}

const dbHandlers = () => {
  $('#getGames').on('click', onGetGames)
  $('#createGame').on('submit', onCreateGame)
  $('.content').on('click', '.delete-game', onDeleteGame)
  $('.content').on('submit', '#updateGame', onUpdateGame)
}

module.exports = {
  dbHandlers
}
