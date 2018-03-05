class AdminController {
    constructor(HttpService, HelperService){
        this._httpService = HttpService;
        this._helperService = HelperService;
        this.videoArr = [];
        this.videos = {};
        this.averageTime = 0;
    }

    $onInit(){
        this.videoArr = this._helperService.updateVideos(this.result);
        this.calculation(this.videoArr);
    }

    calculation(arr){
        arr.forEach((val) => {
            val.timestamp.forEach((value) => {
                if(Object.keys(this.videos).indexOf(value.src) === -1) this.videos[value.src] = {time:0, percent: 0};
            })
        })

        let timeStamp = [];
        arr.forEach((val) => timeStamp = timeStamp.concat(val.timestamp))
        this._helperService.findVideosTime(timeStamp, this.videos);
        this.averageTime = this._helperService.findPercent(this.videos);
    }

    remove(id, ind){
        this._httpService.delete({id: id}).then(() => {
            this.videoArr.splice(ind, 1);
            this.calculation(this.videoArr);
        })
    }
}

const AdminComponent = {
    bindings: {
        'result': '<',
    },
    template: `
        <div class="md-padding">
            <fieldset class="standard">
                  <legend>Admin Panel</legend>
                  <div layout-wrap="" layout-gt-sm="row">
                    <div flex-gt-sm="50">
                      <div>
                        Number of recordings: <span>{{$ctrl.videoArr.length}}</span>
                      </div>
                    </div>
                  </div>
                  <div layout-gt-sm="row">
                    <div flex-gt-sm="50">
                      <div>
                        Average rate of all saved recordings: <span>{{$ctrl.averageTime }}</span>
                      </div>
                    </div>
                  </div>
                   <section>
                       <md-list>
                        <md-subheader class="md-no-sticky">Distribution of various:</md-subheader>
                          <md-list-item ng-repeat="(ind, video) in $ctrl.videos">
                            <p>Video № {{$index+1}}  {{video.percent}}%</p>
                      </md-list>
                  </section> 
                  <section flex-gt-md="20">
                       <md-list>
                        <md-subheader class="md-no-sticky">List of videos:</md-subheader>
                          <md-list-item ng-repeat="(ind, video) in $ctrl.videoArr">
                            <p>Record №{{ind+1}} - {{video.id}}</p>
                            <md-button class="md-raised" ng-click="$ctrl.remove(video.id, ind)" md-colors="{'background-color': 'red'}">Remove</md-button>
                      </md-list>
                  </section>
                </fieldset>
            </div>
    `,
    controller: AdminController
}

exports.modules = AdminComponent;