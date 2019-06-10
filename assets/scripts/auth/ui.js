'use strict'

const store = require('../store.js')

const onSignUpSuccess = responseData => {
  console.log(responseData)
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

const onChangePasswordSuccess = responseData => {
  $('#message').text('Password Changed Successfully!')
  $('form').trigger('reset')
}

const onChangePasswordFailure = responseData => {
  $('#message').text('Password Change Failed, Try Again!')
  $('form').trigger('reset')
}

const onSignOutSuccess = responseData => {
  $('#message').text('Sign Out Success, See you soon!')
  $('form').trigger('reset')
}

const onSignOutFailure = responseData => {
  $('#message').text('Sign Out Failed, Please try again!')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
