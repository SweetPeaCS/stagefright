import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ClipsClipController extends Controller {

    // Fixes access to model if we transition
    // from a route that has already loaded 
    // multiple records into the store
    get clipByParam() {
        if(this.model.clips) {
            if(this.model.clips.get('slug')) {
                return this.model.clips;
            }
        } 

        return this.model;
    }

    @action   
    async addTag(item, tag, type) {
        // Type needs to be passed into component
        const record = this.store.findRecord(type, item.get('id'))
            .then(record => {
                record.tags.addObject(tag);
                record.save(); 
            });
        }
    @action   
    async removeTag(item, tag, type) {
        this.store.findRecord(type, item.get('id'))
            .then(store => {
                store.tags = store.tags.removeObject(tag);
                store.save();
            })
    }
}
