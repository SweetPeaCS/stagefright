import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ModelCardCardTagComponent extends Component {

    @tracked isSelected = this.args.isSelected || false;

    @action 
    toggleSelectionStatus() {
        this.isSelected = (this.isSelected ? false : true);
    }
    
}
