class VideoController {
    constructor($element, RecorderService, HttpService){
        this._element = $element;
        this._recorderService = RecorderService;
        this._httpService = HttpService;
        this.videoElement = this._element[0].querySelector('video');
        this._recorderService.videoElement = this.videoElement;
        this.listener = {
            durationchange: this._recorderService.add.bind(this._recorderService, this.videoElement),
            ended: this.nextVideo.bind(this),
        }
    }

    addListener(){
        this.videoElement.addEventListener("durationchange", this.listener.durationchange, true);
        this.videoElement.addEventListener("ended", this.listener.ended, true);
    }

    removeListener(){
        this.videoElement.removeEventListener('durationchange',  this.listener.durationchange, true);
        this.videoElement.removeEventListener('ended', this.listener.ended, true);
    }

    nextVideo(){
        this._recorderService.add(this.videoElement);
        this.videoElement.src = this.urls[this.urls.indexOf(this.videoElement.src) + 1] || this.urls[0];
        this.videoElement.load();
        this.videoElement.play();
    }

    changeSrc(index){
        this._recorderService.add(this.videoElement);
        this.videoElement.src = this.urls[index] || this.urls[0];
        this.videoElement.play();
    }

    $onInit(){
        this.videoElement.src = this.urls[0];
        this._recorderService.on('start', () => {
            this.addListener();
            this._recorderService.add(this.videoElement);
            this.videoElement.play()
        });
        this._recorderService.on('stop', () => {
            this._recorderService.add(this.videoElement);
            this.videoElement.pause();
            this.removeListener();
        });
        this._recorderService.on('load', this.playRecVideo.bind(this));
        this._recorderService.on('post', this.post.bind(this));
    }

    post(arr){
        this._httpService.post({id:arr.id, timestamp: JSON.stringify(arr.timestamp)});
    }

    $onDestroy(){
        this.removeListener();
    }

    playRecVideo(obj){
        this.videoElement.pause();
        playVideo.call(this, obj);
        let flag = false;

        function playVideo(arr){
            let video = arr.splice(0,1)[0];
            let nextVideo = arr.splice(0,1)[0];

            if(nextVideo){
                this.videoElement.src = video.src;
                this.videoElement.load();
                this.videoElement.currentTime = video.timeStamp;
                this.videoElement.play();
                this.videoElement.ontimeupdate = (vid) => {
                    if(vid.target.currentTime >= nextVideo.timeStamp && !flag){
                        if(arr.length>0){
                            playVideo.call(this, arr);
                        }else{
                            flag = true;
                            this.videoElement.pause();
                            return ;
                        }
                    }
                }
            }else{
                flag = true;
                this.videoElement.pause();
                return ;
            }
        }
    }
}

const VideoComponent = {
    bindings: {
        urls: '<'
    },
    template: `
          <md-card-title-media>
             <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">
                <div class="block">
                    <video controls>
                        <source ng-src='{{$ctrl.src}}' type="video/mp4"></source>
                    </video>
                </div>
                <md-button ng-repeat="(ind, val) in $ctrl.urls" ng-click="$ctrl.changeSrc(ind)" class="md-raised" md-colors="{'background-color': 'blue'}">{{ind+1}}</md-button>
             </section>
          </md-card-title-media>
    `,
    controller: VideoController
}

export default VideoComponent;