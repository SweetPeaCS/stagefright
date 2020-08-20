import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
// import Table from 'ember-light-table';

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
        return this.args.model.sortBy('views').reverse().slice(0, 40);
    }

    get clipTableHeaders() {
        return [{
            label: 'Title',
            valuePath: 'title',
            width: '150px',
          }, {
            label: 'Broadcaster',
            valuePath: 'broadcaster',
            width: '150px'
          }, {
            label: 'Views',
            valuePath: 'views',
            width: '150px'
          }];
    }

    get vodTableHeaders() {
        return [{
            label: 'Title',
            valuePath: 'title',
            width: '150px',
          }, {
            label: 'Broadcast date',
            valuePath: 'date',
            width: '150px'
          }, {
            label: 'Views',
            valuePath: 'views',
            width: '150px'
          }];
    }

    get clipTable() {
        // return new Table(this.get('clipTableHeaders'), this.limitedModel.clips, { enableSync: true });
    }

    get vodTable() {
        // return new Table(this.get('vodTableHeaders'), this.limitedModel.clips, { enableSync: true });
    }

    @action
    toggleCardLayout() {
        this.cardsOn = (this.cardsOn ? false : true);
    }

}
