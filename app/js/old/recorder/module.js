import angular from 'angular';
import RecorderController from './controllers/controller.js';
import CountStore from './services/count-store.js';
import TitleExample from './directives/title-example.js';

angular
  .module('stream.recorder', [])
  .controller('RecorderController', RecorderController)
  .service('CountStore', CountStore)
  .directive('titleExample', TitleExample.directiveFactory);
