import Component from '@glimmer/component';

export default class AnalyticsBarChartTagViewsComponent extends Component {

    get chartOptions() {
        const tags = this.args.tags.getEach('name').sort();

        return {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Tag/View balance sheet'
            },
            xAxis: {
                categories: tags
            },
            yAxis: {
                title: {
                    text: 'Views'
                }
            },
        }
    }

    get tagStatBarChart() {
        const tags = this.args.tags;
        const clips = this.args.model.clips;
        let resultSet = {};

        // const data = tags.forEach(tag => {
        //     let views = 0;
        //     tag.get('clips').forEach((clip, index, clipArray) => {
        //         views += clip.views;
        //     });
        //     resultSet[tag.get('name')] = views;
        // });

        // NOTE:
        // originally pulled all clips through tag
        // relationsship but then we can't leverage
        // our filtered models and therefore no
        // dynamic filtering
    
        const update = clips.forEach(clip => {
            let views = clip.get('views') || 0;
            let tags = clip.get('tags');
            tags.forEach(tag => {

                if(!resultSet[tag.get('name')]) {
                    resultSet[tag.get('name')] = 0;
                }
                resultSet[tag.get('name')] += views;
            })
        });

        // order results alphabetical
        const unorderedResults = resultSet;
        const orderedResults = {};
        Object.keys(unorderedResults).sort().forEach(key => orderedResults[key] = unorderedResults[key]);
        const data = Object.values(orderedResults);

        return [{
                name: 'Views',
                data: data
            }]
    }

}
