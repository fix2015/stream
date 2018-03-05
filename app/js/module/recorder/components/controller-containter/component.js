class VideoController {
    constructor(RecorderService, HelperService, $scope){
        this._recorderService = RecorderService;
        this._helperService = HelperService;
        this._scope = $scope;
        this.recordArr = [];
        this.playing=false;
        this._recorderService.on('update', this.updateVideoJSON.bind(this));
        this._recorderService.on('load', this.playingVideo.bind(this, true));
        this._recorderService.on('playFinished', this.playingVideo.bind(this, false));
    }

    playingVideo(status){
        this.playing = status;
        this._scope.$applyAsync();
    }

    loadVideo(arr){
        this._recorderService.load(arr.timestamp.slice());
    }

    updateVideoJSON(arr){
        this.recordArr.push(arr);
    }

    updateVideos(){
        this.recordArr = this._helperService.updateVideos(this.videos);
    }

    $onInit(){
        this.updateVideos();
    }
}

const VideoComponent = {
    bindings: {
        'videos': '<',
        'record': '&',
        'recording': '<'
    },
    template: `
        <section>
           <md-card-title-text layout="row" layout-align="center" ng-class="$ctrl.recording ? 'recording' : ''">
            <md-button ng-disabled="$ctrl.playing" aria-label="ariallabel" ng-click='$ctrl.record()'  class="md-raised" md-colors="{'background-color': $ctrl.playing ? 'grey-500' : 'red' }">
                <i class="fas fa-video"></i> <span ng-bind="$ctrl.recording ? 'Stop' : 'Rec'"></span>
            </md-button>
        </md-card-title-text>
        </section>
        <section>
            <div layout-wrap="" layout-gt-sm="row" layout-align="right">
                <md-list>
                    <md-subheader class="md-no-sticky">Recorded Video</md-subheader>
                      <md-list-item ng-repeat="(ind, arr) in $ctrl.recordArr">
                        <p>Recorder № {{$index+1}} </p>
                        <div class="md-list-item-text" layout="column">
                            <md-button ng-disabled="$ctrl.recording" aria-label="{{arr}}" ng-click='$ctrl.loadVideo(arr)'  class="md-raised"  md-colors="{'background-color': $ctrl.recording ? 'grey-500' : 'red' }"><i class="fas fa-play"></i></md-button>
                       </md-list-item>
                 </md-list>
            </div>
        </section>
        `,
    controller: VideoController
}

exports.modules = VideoComponent;

