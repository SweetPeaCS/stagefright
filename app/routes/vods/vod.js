import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class VodsVodRoute extends Route {
    async model(params) {
        return RSVP.hash({
            vods: this.store.findRecord('vod', params.vod_id),
            clips: this.store.findAll('clip')
        })
    }

}

