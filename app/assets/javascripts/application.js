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

// main chart div


// Eddy Curry chart
var gaugeChart = AmCharts.makeChart("chartdivfultz", {
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
      // The first radial - biometric
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "100%",
      "innerRadius": "85%"
    }, {
      "color": "#276cc6",
      "startValue": 0,
      "endValue": 35,
      "radius": "100%",
      "innerRadius": "85%",
      "balloonText": "17%"
    }, {
      // Second radial - injury history
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "80%",
      "innerRadius": "65%"
    }, {
      "color": "#508fe0",
      "startValue": 0,
      "endValue": 36,
      "radius": "80%",
      "innerRadius": "65%",
      "balloonText": "18%"
    }, {
      // Third radial - spectrum
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "60%",
      "innerRadius": "45%"
    }, {
      "color": "#cc4748",
      "startValue": 0,
      "endValue": 20,
      "radius": "60%",
      "innerRadius": "45%",
      "balloonText": "9.8%"
    }, {
      // Fourth radial - injury risk
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "40%",
      "innerRadius": "25%"
    }, {
      "color": "#961b1b",
      "startValue": 0,
      "endValue": 84,
      "radius": "40%",
      "innerRadius": "25%",
      "balloonText": "42% Chance of Injury"
    }]
  }],
  "allLabels": [{
    "text": "Biometrics",
    "x": "49%",
    "y": "5%",
    "size": 15,
    "bold": true,
    "color": "#276cc6",
    "align": "right"
  }, {
    "text": "Injury History",
    "x": "49%",
    "y": "15%",
    "size": 15,
    "bold": true,
    "color": "#508fe0",
    "align": "right"
  }, {
    "text": "Spectrum",
    "x": "49%",
    "y": "24%",
    "size": 15,
    "bold": true,
    "color": "#cc4748",
    "align": "right"
  }, {
    "text": "Injury Risk",
    "x": "49%",
    "y": "33%",
    "size": 15,
    "bold": true,
    "color": "#961b1b",
    "align": "right"
  }],
  "export": {
    "enabled": true
  }
});
