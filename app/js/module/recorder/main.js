class RecorderController {
    constructor(RecorderService){
        this.recorderService = RecorderService;
        this.urls=[
            window.location.origin + '/assets/1.mp4',
            window.location.origin + '/assets/2.mp4',
            window.location.origin + '/assets/3.mp4'
        ];
        this.recording = false;
    }

    record(){
        this.recording = !this.recording;
        if(this.recording){
            this.recorderService.init();
            this.recorderService.emit('start');
        }else{
            this.recorderService.emit('stop');
            this.recorderService.stop();

        }
    }
}

const RecorderComponent = {
    bindings:{
        videos: '<'
    },
    template: `
     <md-content class="md-padding" layout-xs="column" layout="row" layout-align="center center" >
        <div flex-md="100" flex-gt-md="50" layout="column">
          <md-card md-theme-watch="">
            <md-card-title>
                <video-container urls="$ctrl.urls" flex-xs="100" flex-gt-xs="50"></video-container>
                <controller-container videos="$ctrl.videos" record="$ctrl.record()" recording="$ctrl.recording" flex-xs="100" flex-gt-xs="50"></controller-container>
            </md-card-title>
           </md-card>
        </div>
      </md-content>
    `,
    controller: RecorderController
}

exports.modules = RecorderComponent;