'use strict'

// const store = require('../store.js')
const showGamesTemplate = require('../templates/games.handlebars')
const showYourGamesTemplate = require('../templates/gamesowned.handlebars')

const getGamesSuccess = responseData => {
  $('#message').text('See the games below!')
  $('form').trigger('reset')
  $('.content').removeClass('hidden')
  const games = responseData.game_lists
  console.log(games)
  const showGamesHtml = showGamesTemplate({ fullGameList: games })
  $('.content').html(showGamesHtml)
}

const getYourGameSuccess = responseData => {
  $('#message').text('See the games below!')
  $('form').trigger('reset')
  $('.content').removeClass('hidden')
  const games = responseData.game_lists
  console.log(games)
  const showGamesHtml = showYourGamesTemplate({ fullGameList: games })
  $('.content').html(showGamesHtml)
}

const updateGameSuccess = responseData => {
  $('#message').text('See the games below!')
  const games = responseData.game_lists
  console.log(games)
  const showGamesHtml = showGamesTemplate({ fullGameList: games })
  $('.content').html(showGamesHtml)
}
const getGamesFailure = responseData => {
  $('#message').text('Request Failed, Please Sign in to View!')
  $('form').trigger('reset')
}

const onCreateSuccess = () => {
  $('#message').text('Game Created')
  $('form').trigger('reset')
}

const onCreateFailure = () => {
  $('#message').text('Game not created.')
  $('form').trigger('reset')
}

const showUpdateGame = () => {
  $('#updateGame').removeClass('hidden')
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  onCreateSuccess,
  onCreateFailure,
  updateGameSuccess,
  showUpdateGame,
  getYourGameSuccess
}
