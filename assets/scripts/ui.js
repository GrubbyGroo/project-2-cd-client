'use strict'

const store = require('./store.js')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up Successfully! Please log in to Play!')
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign Up Failed, Please try again!')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed In, Welcome Back!')
  $('form').trigger('reset')
  store.user = responseData.user
}
const onSignInFailure = responseData => {
  $('#message').text('Sign In Failed, Please try again!')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onSignUpFailure
}
