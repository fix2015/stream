let angular = require('angular');
let recorderComponent = require('./main.js').modules;
let videoComponent = require('./components/video-containter/component').modules;
let controllerContainer = require('./components/controller-containter/component').modules;
let RecorderService = require('./service/recorder-service').modules;

angular
    .module('stream.recorder', [])
    .service('RecorderService', RecorderService)
    .component('recorder', recorderComponent)
    .component('videoContainer', videoComponent)
    .component('controllerContainer', controllerContainer)
