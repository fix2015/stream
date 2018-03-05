let recorder = require('./module/recorder/index.js').modules;
let admin = require('./module/admin/index.js').modules;

let configRouter = function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state(recorder)
        .state(admin);

    $urlRouterProvider.otherwise('stream-recorder');
};

configRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

exports.modules = configRouter;
