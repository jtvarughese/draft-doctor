// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Global variables
var player;
// variables for biometrics
var biometric = {
  var age = 'age'
  var height = 'height'
  var weight = 'weight'
}
// variables for History
var history = {
  var injuries = 'injuries'
  var minutesPlayed = 'minutes_played'
  var strengthOfSchedule = 'strength_of_schedule'
}

// variables for Spectrum
var spectrum = {
  var positionInjury = 'position_injury'
  var severityOfInjury = 'severity_of_injury'
}

function biometric (){
  (var age * 0.625) + (var height * 0.5) + (var weight * 0.625)
}

function history (){
  (var injuries * 1.25) + (var minutesPlayed * 0.1) + (var strengthOfSchedule / 0.625)
}

function spectrum (){
  (var positionInjury * 0.625) + (var severityOfInjury * 1)
}

function injuryRisk (){

}
