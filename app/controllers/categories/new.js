import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'

export default class CategoriesNewController extends Controller {

    @tracked id = '';
    @tracked name = '';
    @tracked description = '';

    get fullCategory() {
        return {
            id: this.id,
            name: this.name,
            description: this.description
        }
    }

    @action
    updateName(value) {
        this.name = value;
        this.id = this.name.replace(/ /g, '').toLowerCase();
    }
    @action
    updateDescription(value) {
        this.description = value;
    }
    @action
    postCategoryToAPI() {
        const newCategory = this.store.createRecord('category', this.fullCategory);
        newCategory.save();
        this.transitionToRoute('categories');
    }
}
