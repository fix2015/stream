class HelperService {
    constructor () {

    }

    updateVideos(arr){
        arr.forEach((val) => {
            val.timestamp = JSON.parse(val.timestamp);
        })

        return arr
    }

    findVideosTime(timeStamp, videos){
        getTimerData.call(this, timeStamp);

        function getTimerData(arr){
            let begin = arr.splice(0,1)[0];
            let end = arr.splice(0,1)[0];

            if(begin && end){
                videos[begin.src].time += end.timeStamp - begin.timeStamp;
                getTimerData.call(this, arr);
            }else{
                return videos;
            }
        }
    }

    findPercent(videos){
        let summ = 0;
        for(let meth in videos){
            summ += videos[meth].time;
        }
        for(let meth in videos){
            videos[meth].percent = (videos[meth].time/summ *100).toFixed(2);
        }
        return (Object.keys(videos).length/summ).toFixed(2);
    }

}
HelperService.$inject = [];

exports.modules = HelperService;
