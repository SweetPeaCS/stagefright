import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ClipsClipController extends Controller {

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
