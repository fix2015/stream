import angular from 'angular';
import recorderComponent from './main.js';
import videoComponent from './components/video-containter/component';
import controllerContainer from './components/controller-containter/component';
import RecorderService from './service/recorder-service';

angular
    .module('stream.recorder', [])
    .service('RecorderService', RecorderService)
    .component('recorder', recorderComponent)
    .component('videoContainer', videoComponent)
    .component('controllerContainer', controllerContainer)
