import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class VodsVodRoute extends Route {
    async model(params) {
        return await RSVP.hash({
            vods: this.store.findRecord('vod', params.vod_id),
            clips: this.store.findAll('clip')
        })
    }

    setupController(controller, model) {
        this._super(...arguments);
        const { vod_id } = this.paramsFor(this.routeName);
        controller.set('vodId', vod_id);
        controller.set('model', model);
    }

}

