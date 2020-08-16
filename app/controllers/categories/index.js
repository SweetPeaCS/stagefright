import Controller from '@ember/controller';
import { action } from '@ember/object'

export default class CategoriesIndexController extends Controller {

    @action
    deleteCategory(category) {
        const id = category.get('id');
        const record = this.store.peekRecord('category', id);
        record.destroyRecord();
    }

}
