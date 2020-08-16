import Component from '@glimmer/component';

export default class AnalyticsVodTimelineComponent extends Component {

    get chartData() {
        const vodId = this.args.vodId;
        const vods = this.args.model.vods;
        const vod = vods.findBy('id', vodId);
        const clips = vod.get('clips');
        let resultSet = []

        const timespan = vod.get('length');
        clips.forEach(clip => {
            const clipTitle = clip.get('title');
            const clipTags = clip.get('tags');
            const clipPosition = clip.get('vodOffset');

            resultSet.push({
                title: clipTitle,
                tags: clipTags.getEach('name'),
                postion: clipPosition
            }) 
        });

        const data = resultSet.map(clip => {
            return {
                "x": timespan/clip.postion,
                "label": clip.tags,
                "name": clip.title,
            }
        });

        console.log(data);

        return {
            marker: {
                symbol: 'circle'
            },
            data: [ data ]
        }
    }
    
    get options() {
        return {
            chart: {
                type: 'timeline'
            },
            title: {
                text: 'Vod Timeline'
            },
            xAxis: {
                min: 0,
                max: 100
            },
            yAxis: {
                visible: false,
                gridLineWidth: 1,
                title: null,
                labels: {
                    enabled: false
                }
            },
            marker: {
            symbol: 'circle'
        },
        }
    }

    get stageFrightTheme() {
        return {
            colors: ['#745c97', '#d597ce', '#f5b0cb', '#DDDF00', '#24CBE5', '#64E572',   
                     '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
                backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgb(255, 255, 255)'],
                        [1, 'rgb(245, 245, 245)']
                    ]
                },
            },
            title: {
                style: {
                    color: '#39375b',
                    font: 'bold 16px "Montserrat", sans-serif'
                }
            },
            subtitle: {
                style: {
                    color: '#d597ce',
                    font: 'bold 12px "Montserrat", sans-serif'
                }
            },
            legend: {
                itemStyle: {
                    font: '9pt "Open Sans", sans-serif',
                    color: '#212121'
                },
                itemHoverStyle:{
                    color: '#878787'
                }   
            }
        }
    }

}
