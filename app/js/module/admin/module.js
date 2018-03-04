import angular from 'angular';
import adminComponent from './main.js';

angular
    .module('stream.admin', [])
    .component('admin', adminComponent)
