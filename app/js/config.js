import recorder from './module/recorder/index.js'
import admin from './module/admin/index.js'

let configRouter = function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state(recorder)
        .state(admin);

    $urlRouterProvider.otherwise('stream-recorder');
};

configRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

export default configRouter;
