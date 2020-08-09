import Route from '@ember/routing/route';

export default class VodsVodRoute extends Route {
    async model(params) {
        return this.store.findRecord('vod', params.vod_id);
    }
}
