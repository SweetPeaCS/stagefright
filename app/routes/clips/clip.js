import Route from '@ember/routing/route';

export default class ClipRoute extends Route {
    async model(params) {
        return this.store.findRecord('clip', params.clip_id);
    }
}
