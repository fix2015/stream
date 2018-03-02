import recorder from './components/recorder/index.js'
import admin from './components/admin/index.js'

let configRouter = function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state(recorder)
        .state(admin);

    $urlRouterProvider.otherwise('stream-recorder');
};

configRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

export default configRouter;
