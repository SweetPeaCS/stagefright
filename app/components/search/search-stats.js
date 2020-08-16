import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SearchSearchStatsComponent extends Component {

    get totalViewsClips() {
        const clipViewsArray = this.args.model.clips.mapBy('views') || [0];
        const count = clipViewsArray.reduce((a, b) => a + b);
        return Math.round(count); 
    }
    get totalViewsVods() {
        const vodViewsArray = this.args.model.vods.mapBy('views') || [0];
        const count = vodViewsArray.reduce((a, b) => a + b);
        return Math.round(count); 
    }

    get averageTimeClips() {
        const clipDurationArray = this.args.model.clips.mapBy('duration');
        const time = clipDurationArray.reduce((a, b) => a + b) / clipDurationArray.length;
        return Math.round(time); 
    }
    get averageTimeVods() {
        const vodDurationArray = this.args.model.vods.mapBy('length');
        const time = vodDurationArray.reduce((a, b) => a + b) / vodDurationArray.length;
        return Math.round(time); 
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
