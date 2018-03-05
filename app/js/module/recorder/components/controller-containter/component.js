class VideoController {
    constructor(RecorderService, HelperService){
        this._recorderService = RecorderService;
        this._helperService = HelperService;
        this.recordArr = []
        this._recorderService.on('update', this.updateVideoJSON.bind(this))
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
        console.log(this)
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
            <md-button aria-label="ariallabel" ng-click='$ctrl.record()'  class="md-raised" md-colors="{'background-color': 'red'}">
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
                            <md-button aria-label="{{arr}}" ng-click='$ctrl.loadVideo(arr)'  class="md-raised"  md-colors="{'background-color': 'red'}"><i class="fas fa-play"></i></md-button>
                       </md-list-item>
                 </md-list>
            </div>
        </section>
        `,
    controller: VideoController
}

exports.modules = VideoComponent;

