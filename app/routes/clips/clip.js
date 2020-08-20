import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class ClipRoute extends Route {
    async model(params) {
        return RSVP.hash({
            clips: this.store.findRecord('clip', params.clip_id),
            tags: this.store.findAll('category')
        })
    }

    setupController(controller, model) {
        this._super(...arguments);
        const { clip_id } = this.paramsFor(this.routeName);
        controller.set('clipId', clip_id);
        controller.set('model', model);
    }
}
