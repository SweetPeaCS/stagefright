import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SearchFilterDropdownComponent extends Component {

    @tracked isDecollapsed = false;

    get inActiveItems() {
        return this.args.data.filter(item => !this.args.active.includes(item));
    }

    @action
    changeCollapseState() {
        this.isDecollapsed = (this.isDecollapsed) ? false : true;
    }

    @action
    selectFilterItem(item, type) {
        this.args.addFilter(item, type);
        this.changeCollapseState();
    }

}
