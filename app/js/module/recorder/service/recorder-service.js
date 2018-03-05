class RecorderService {
    constructor () {
        this._events = {};
        this.videoElement = null;
    }

    init () {
        this.timeStamps = [];
    }

    load (obj) {
        this.emit('load', [obj]);
    }

    add (video) {
        if(!this.timeStamps) return ;
        this.timeStamps.push({
            src: video.src,
            timeStamp: video.currentTime,
        });
    }

    stop (){
        let obj = {id: this.generate(), timestamp: this.timeStamps};
        this.emit('post', [obj])
        this.emit('update', [obj]);
    }

    emit (status, arg=[]) {
        this._events[status].forEach((func) => {
            func(...arg);
        })
    }

    on (status, callback) {
        if(!this._events[status]) this._events[status] = [];
        this._events[status].push(callback);
    }

    generate (){
        return '_' + Math.random().toString(36).substr(2, 9);
    }

}
RecorderService.$inject = [];

exports.modules = RecorderService;
