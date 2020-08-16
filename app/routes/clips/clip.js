import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class ClipRoute extends Route {
    async model(params) {
        return RSVP.hash({
            clips: this.store.findRecord('clip', params.clip_id),
            tags: this.store.findAll('category')
        })
    }
}
