import Component from '@glimmer/component';

export default class AnalyticsBarChartTagCountComponent extends Component {

    get chartOptions() {
        const tagList = this.args.tags.getEach('name').sort();
        return {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Tag balance sheet'
            },
            xAxis: {
                categories: [ ...tagList ]
            },
            yAxis: {
                title: {
                    text: 'Clips'
                }
            }
        }
    }

    get tagStatBarChart() {
        const clips = this.args.model.clips;
        let resultSet = {};

        // const data = tags.forEach(tag => {
        //     let count = tag.get('clips').length;
        //     resultSet[tag.get('name')] = count;
        // });

        const update = clips.forEach(clip => {
            let tags = clip.get('tags');
            tags.forEach(tag => {
                if(!resultSet[tag.get('name')]) {
                    resultSet[tag.get('name')] = 0;
                }
                resultSet[tag.get('name')] += 1;
            })
        });

        // order results alphabetical
        const unorderedResults = resultSet;
        const orderedResults = {};
        Object.keys(unorderedResults).sort().forEach(key => orderedResults[key] = unorderedResults[key]);
        const data = Object.values(orderedResults);

        return [{
                name: 'Tags',
                data: data
            }]
    }

}
