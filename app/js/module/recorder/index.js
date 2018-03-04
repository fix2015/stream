export default {
    name: 'recorder',
    url: '/',
    resolve: {
        videos:   ["$q", "HttpService", function($q, HttpService) {
            return $q(function(resolve, reject){
                HttpService.getAll().then((obj) => {
                    resolve(obj.data.video);
                })
            })
        }]
    },
    template: '<recorder videos="$resolve.videos"/>'
};