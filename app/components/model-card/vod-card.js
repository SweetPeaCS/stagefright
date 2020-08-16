import Component from '@glimmer/component';

export default class ModelCardVodCardComponent extends Component {

    get time() {
        const seconds = this.args.vod.length;
        const minutes = seconds % 60;
        const hours = minutes % 60;

        return `${minutes} min`
    }

}
