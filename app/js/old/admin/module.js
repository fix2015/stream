import angular from 'angular';
import AdminController from './controllers/controller.js';

angular
  .module('stream.admin', [])
  .controller('AdminController', AdminController);
