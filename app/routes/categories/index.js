import Route from '@ember/routing/route';

export default class CategoriesIndexRoute extends Route {
    async model() {
        return this.store.findAll('category')
            .then(result => result)
            .catch(error => console.log("No prob"));
    }
}
