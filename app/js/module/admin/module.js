let angular = require('angular');
let adminComponent = require('./main.js').modules;

angular
    .module('stream.admin', [])
    .component('admin', adminComponent)
