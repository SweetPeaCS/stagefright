import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FilterList extends Component {
    
    @tracked cardsOn = true;

    get validateModelInput() {
        return (this.isClip || this.isVod );
    }
    
    get isClip() {
        return (this.args.modelType === "clip" ? true : false);
    }
    get isVod() {
        return (this.args.modelType === "vod" ? true : false);
    }

    get limitedModel() {
        return this.args.model.slice(0, 20);
    }

    @action
    toggleCardLayout() {
        this.cardsOn = (this.cardsOn ? false : true);
    }
}
