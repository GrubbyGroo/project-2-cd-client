'use strict'

const store = require('../store.js')

const onSignUpSuccess = responseData => {
  $('#message').text('Thanks for Joining Us! Please log in!')
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign Up Failed, Please try again!')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#message').text('Checked in, Welcome Back!')
  $('form').trigger('reset')
  store.user = responseData.user
  $('.logged-in').removeClass('hidden')
  $('.not-logged-in, .content').addClass('hidden')
}
const onSignInFailure = responseData => {
  $('#message').text('Sign In Failed, Please try again!')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = responseData => {
  $('#errormessage').stop(true, true).text('Password Changed Successfully!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
  $('form').trigger('reset')
}

const onChangePasswordFailure = responseData => {
  $('#errormessage').stop(true, true).text('Password Change Failed, Try Again!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
  $('form').trigger('reset')
}

const onSignOutSuccess = responseData => {
  $('#message').text('Thanks for Coming, Come Back Again Soon!')
  $('form').trigger('reset')
  $('.logged-in').addClass('hidden')
  $('.not-logged-in').removeClass('hidden')
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
