import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ClipsIndexController extends Controller {

    @action
    updateSearch(query) {
        this.set('searchQuery', query);
    }
}
