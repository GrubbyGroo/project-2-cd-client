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
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const dbHandlers = () => {
  $('#getGames').on('click', onGetGames)
  $('#createGame').on('submit', onCreateGame)
}

module.exports = {
  dbHandlers
}
