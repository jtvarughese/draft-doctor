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
// var player;
// // variables for biometrics
// var biometric = {
//   var age = 'age'
//   var height = 'height'
//   var weight = 'weight'
// }
// // variables for History
// var history = {
//   var injuries = 'injuries'
//   var minutesPlayed = 'minutes_played'
//   var strengthOfSchedule = 'strength_of_schedule'
// }
//
// // variables for Spectrum
// var spectrum = {
//   var positionInjury = 'position_injury'
//   var severityOfInjury = 'severity_of_injury'
// }
//
// function biometric (){
//   (var age * 0.625) + (var height * 0.5) + (var weight * 0.625)
// }
//
// function history (){
//   (var injuries * 1.25) + (var minutesPlayed * 0.1) + (var strengthOfSchedule / 0.625)
// }
//
// function spectrum (){
//   (var positionInjury * 0.625) + (var severityOfInjury * 1)
// }
//
// function injuryRisk (){
//
// }

<script>
var gaugeChart = AmCharts.makeChart("chartdiv", {
  "type": "gauge",
  "theme": "light",
  "axes": [{
    "axisAlpha": 0,
    "tickAlpha": 0,
    "labelsEnabled": false,
    "startValue": 0,
    "endValue": 100,
    "startAngle": 0,
    "endAngle": 270,
    "bands": [{
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "100%",
      "innerRadius": "85%"
    }, {
      "color": "#84b761",
      "startValue": 0,
      "endValue": 80,
      "radius": "100%",
      "innerRadius": "85%",
      "balloonText": "90%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "80%",
      "innerRadius": "65%"
    }, {
      "color": "#fdd400",
      "startValue": 0,
      "endValue": 35,
      "radius": "80%",
      "innerRadius": "65%",
      "balloonText": "35%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "60%",
      "innerRadius": "45%"
    }, {
      "color": "#cc4748",
      "startValue": 0,
      "endValue": 92,
      "radius": "60%",
      "innerRadius": "45%",
      "balloonText": "92%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "40%",
      "innerRadius": "25%"
    }, {
      "color": "#67b7dc",
      "startValue": 0,
      "endValue": 68,
      "radius": "40%",
      "innerRadius": "25%",
      "balloonText": "68%"
    }]
  }],
  "allLabels": [{
    "text": "First option",
    "x": "49%",
    "y": "5%",
    "size": 15,
    "bold": true,
    "color": "#84b761",
    "align": "right"
  }, {
    "text": "Second option",
    "x": "49%",
    "y": "15%",
    "size": 15,
    "bold": true,
    "color": "#fdd400",
    "align": "right"
  }, {
    "text": "Third option",
    "x": "49%",
    "y": "24%",
    "size": 15,
    "bold": true,
    "color": "#cc4748",
    "align": "right"
  }, {
    "text": "Fourth option",
    "x": "49%",
    "y": "33%",
    "size": 15,
    "bold": true,
    "color": "#67b7dc",
    "align": "right"
  }],
  "export": {
    "enabled": true
  }
});
</script>
