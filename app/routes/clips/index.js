import Route from '@ember/routing/route';

export default class ClipsIndexRoute extends Route {
    async model() {
        return this.store.findAll('clip');
    }
}
