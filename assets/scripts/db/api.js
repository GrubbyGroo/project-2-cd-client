
const config = require('../config')
const store = require('../store.js')

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/gamelist',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteGame = function (id) {
  return $.ajax({
    url: config.apiUrl + '/gamelist/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/gamelist',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  getGames,
  deleteGame,
  createGame
}
