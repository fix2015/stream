import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import configRouter from './config.js';
import './module/recorder/module.js';
import './module/admin/module.js';
import HttpService from './service/http-service';
import HelperService from './service/helper-service';
// import './old/recorder/module.js';


let dependencies = [
  'ui.router',
  'ngMaterial',
  'stream.recorder',
  'stream.admin',
];

angular
  .module('streamApp', dependencies)
  .service('HttpService', HttpService)
  .service('HelperService', HelperService)
  .config(configRouter);
