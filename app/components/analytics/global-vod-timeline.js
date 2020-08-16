import Component from '@glimmer/component';

export default class AnalyticsGlobalVodTimelineComponent extends Component {

    get chartOptions() {
        const titles = this.args.model.vods.getEach('title');
        return {
            chart: {
                // zoomType: 'x',
                type: 'timeline'
            },
            xAxis: {
                type: 'datetime',
                visible: false,
                min: 0,
                max: 100
            },
            yAxis: {
                gridLineWidth: 1,
                title: null,
                labels: {
                    enabled: false
                }
            },
            legend: {
                enabled: false
            },
            marker: {
                symbol: 'circle'
            },
        }
    }

    get chartData() {

        const vodCollection = this.args.model.vods;
        let resultSet = [];

        vodCollection.filter(vod => vod.get('length') > (2 * 60 * 60)).forEach(vod => {
            let data = {};
            const vodId = vod.get('vodId');
            const vodLength = vod.get('length');
            const vodConnectedClips = vod.get('clips');

            data[vodId] = {};

            vodConnectedClips.forEach((clip, index) => {
                data = {
                    x: Math.round(vodLength/clip.get('vodOffset')),
                    name: clip.get('title'),
                    label: clip.get('tags').getEach('name')
                }
            })

            resultSet.push(data);
        });

        return {
            data: resultSet
        }
    }
}
