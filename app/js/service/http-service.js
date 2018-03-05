class HttpService {
    constructor ($http, $q, BE_DOMAIN) {
        this._http = $http;
        this._q = $q;
        this._domain = BE_DOMAIN;
    }

    post (obj) {
        var deferred = this._q.defer();
        this._http({
            method: 'POST',
            url: this._domain + '/video',
            data: JSON.stringify(obj)
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(error);
        });
        
        return deferred.promise;
    }

    getAll () {
        var deferred = this._q.defer();
        this._http({
            method: 'GET',
            url: this._domain + '/video',
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    get (id) {
        var deferred = this._q.defer();
        this._http({
            method: 'GET',
            url: this._domain + '/video',
            data: id
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    delete (obj) {
        var deferred = this._q.defer();
        this._http({
            method: 'DELETE',
            url: this._domain + '/video/' + obj.id
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

}
HttpService.$inject = ['$http', '$q', 'BE_DOMAIN'];

exports.modules = HttpService;
