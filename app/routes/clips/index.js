import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class ClipsIndexRoute extends Route {
    async model() {
        return RSVP.hash({
            clips: this.store.findAll('clip'),
            tags: this.store.findAll('category')
        })
    }
}
