let angular = require('angular');
require('angular-ui-router');
require('angular-material');
let configRouter = require('./config.js').modules;
require('./module/recorder/module.js');
require('./module/admin/module.js');
let HttpService = require('./service/http-service').modules;
let HelperService = require('./service/helper-service').modules;

let dependencies = [
  'ui.router',
  'ngMaterial',
  'stream.recorder',
  'stream.admin',
];

angular
  .module('streamApp', dependencies)
  .constant('BE_DOMAIN', 'http://104.46.52.168:1337')
  .service('HttpService', HttpService)
  .service('HelperService', HelperService)
  .config(configRouter);
