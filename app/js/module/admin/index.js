exports.modules = {
    name: 'admin',
    url: '/admin',
    resolve: {
        result:   ["$q", "HttpService", function($q, HttpService) {
            return $q(function(resolve, reject){
                HttpService.getAll().then((obj) => {
                    resolve(obj.data.video);
                })
            })
        }]
    },
    template: '<admin result="$resolve.result"/>'
};