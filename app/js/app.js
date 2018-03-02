import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import configRouter from './config.js';
// import './old/recorder/module.js';
// import './old/admin/module.js';
import adminComponent from './components/admin/component.js';
import recorderComponent from './components/recorder/component.js';

let dependencies = [
  'ui.router',
  'ngMaterial',
];

angular
  .module('streamApp', dependencies)
  .component('admin', adminComponent)
  .component('recorder', recorderComponent)
  .config(configRouter);
