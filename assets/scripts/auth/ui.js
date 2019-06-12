'use strict'

const store = require('../store.js')

const onSignUpSuccess = responseData => {
  $('#errormessage').stop(true, true).text('Thank you for joining us, please log in!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('#errormessage').stop(true, true).text('Sign Up Failed, Please Try Again!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#errormessage').stop(true, true).text('Checked in, Welcome Back!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
  $('form').trigger('reset')
  store.user = responseData.user
  $('.logged-in').removeClass('hidden')
  $('.not-logged-in, .content').addClass('hidden')
}
const onSignInFailure = responseData => {
  $('#errormessage').stop(true, true).text('Sign In Failed, Please try again!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
  $('form').trigger('reset')
}

const onChangePasswordSuccess = responseData => {
  $('#errormessage').stop(true, true).text('Password Changed Successfully!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
  $('#message').stop(true, true)
  $('form').trigger('reset')
}

const onChangePasswordFailure = responseData => {
  $('#errormessage').stop(true, true).text('Password Change Failed, Try Again!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
  $('form').trigger('reset')
}

const onSignOutSuccess = responseData => {
  $('#errormessage').stop(true, true).text('Thanks for Coming, Come Back Again Soon!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
  $('#message').stop(true, true)
  $('form').trigger('reset')
  $('.logged-in').addClass('hidden')
  $('.not-logged-in, .about').removeClass('hidden')
}

const onSignOutFailure = responseData => {
  $('#errormessage').stop(true, true).text('Sign Out Failed, Please try again!').fadeIn()
  $('#errormessage').stop(true, true).fadeOut(5000)
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
