import Route from '@ember/routing/route';

export default class AnalyseRoute extends Route {
    async model() {
        return this.store.findAll('clip');
    }
}
