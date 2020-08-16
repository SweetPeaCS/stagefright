import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { intersect } from '@ember/object/computed';

export default class ModelCardCardTagListComponent extends Component {

    @tracked isInEditMode = false;

    get inactiveTags() {
        return this.allTags.filter(tag => !this.allAttachedTags.getEach('name').includes(tag.get('name')));
    }
    get allTags() {
        return this.args.tags.uniqBy('name');
    }
    get allAttachedTags() {
        return this.args.item.tags.uniqBy('name');
    }

    @action
    toggleEditMode() {
        this.isInEditMode = (this.isInEditMode ? false : true);
    }
}
