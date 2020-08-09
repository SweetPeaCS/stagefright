import Route from '@ember/routing/route';

export default class VodsIndexRoute extends Route {
    async model() {
        return this.store.findAll('vod');
    }
}
