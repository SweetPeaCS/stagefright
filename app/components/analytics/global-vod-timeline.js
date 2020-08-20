import Component from '@glimmer/component';

export default class AnalyticsGlobalVodTimelineComponent extends Component {

    get chartOptions() {
        const titles = this.args.model.vods.getEach('title');
        return {
        
            title: {
                text: 'Vod timeline mapping'
              },
            
              xAxis: [{
                title: { text: 'Data' },
                alignTicks: false
              }, {
                title: { text: 'Histogram' },
                alignTicks: false,
                opposite: true
              }],
            
              yAxis: [{
                title: { text: 'Data' }
              }, {
                title: { text: 'Histogram' },
                opposite: true
              }]
        }
    }

    get chartData() {

        const vodCollection = this.args.model.vods;
        let resultSet = [];

        // only VODs that are longer than 2hs
        vodCollection.filter(vod => vod.get('length') > (2 * 60 * 60)).forEach(vod => {
            let data = {};
            const vodId = vod.get('vodId');
            const vodLength = vod.get('length');
            const vodConnectedClips = vod.get('clips');

            vodConnectedClips.forEach((clip, index) => {
                data = {
                    x: Math.floor((clip.get('vodOffset')/vodLength) * 100 ),
                    name: clip.get('title'),
                    // label: clip.get('tags').getEach('name'),
                }
            })

            resultSet.push(data);
        });

        let dataExport = [];
        resultSet.forEach(item => dataExport.push(item.x));


        return [{
            name: 'Histogram',
            type: 'histogram',
            xAxis: 1,
            yAxis: 1,
            baseSeries: 's1',
            // binsNumber: 20,
            zIndex: -1
          }, {
            name: 'Data',
            type: 'scatter',
            data: dataExport,
            id: 's1',
            marker: {
              radius: 1.5
            }
          }]

    }
}
