'use strict'

// const store = require('../store.js')
const showGamesTemplate = require('../templates/games.handlebars')

const getGamesSuccess = responseData => {
  $('#message').stop(true, true).text('Success, See Below!').fadeIn()
  $('#message').stop(true, true).fadeOut(10000)
  $('#errormessage').stop(true, true)
  $('form').trigger('reset')
  $('.content').removeClass('hidden')
  $('.about').addClass('hidden')
  const games = responseData.game_lists
  const newData = games.sort(function (a) {
    if (a.editable === true) return -1
    if (a.editable === false) return 1
  })
  const showGamesHtml = showGamesTemplate({
    fullGameList: newData
  })
  $('.content').html(showGamesHtml)
}

const updateGameSuccess = responseData => {
  $('#message').text('See the New Adventure below!')
  const games = responseData.game_lists
  const showGamesHtml = showGamesTemplate({
    fullGameList: games
  })
  $('.content').html(showGamesHtml)
}
const getGamesFailure = responseData => {
  $('#message').stop(true, true).text('Not Retrieved, Please Try Again!').fadeIn()
  $('#message').stop(true, true).fadeOut(10000)
  $('#errormessage').stop(true, true)
  $('form').trigger('reset')
}

const onCreateSuccess = () => {
  $('#message').text('Game Created')
  $('form').trigger('reset')
}

const onCreateFailure = () => {
  $('#message').stop(true, true).text('Game Not Created, Try Again!').fadeIn()
  $('#message').stop(true, true).fadeOut(10000)
  $('#errormessage').stop(true, true)
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
  showUpdateGame
}
