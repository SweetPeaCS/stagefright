import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { debounce } from '@ember/runloop';

export default class ClipsIndexController extends Controller {

    @tracked filteredClips = this.model.clips;
    @tracked searchQuery = '';

    @action
    updateSearch(query) {
        this.set('searchQuery', query.toLowerCase());
        debounce({ name: 'search update' }, this.updateFilteredClipsModel, 150 );
    }

    @action
    updateFilteredClipsModel() {
        this.filteredClips = this.model.clips
            .filter(clip => clip.title.toLowerCase().includes(this.searchQuery) || clip.slug.toLowerCase().includes(this.searchQuery) || clip.broadcaster.toLowerCase().includes(this.searchQuery))
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
